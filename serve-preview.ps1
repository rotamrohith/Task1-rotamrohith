$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 5173
$tcp = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Parse("127.0.0.1"), $port)
$tcp.Start()
Write-Host "CareerConnect preview server running at http://127.0.0.1:$port/"

function Get-ContentType($filePath) {
  $extension = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
  switch ($extension) {
    ".html" { "text/html; charset=utf-8" }
    ".css" { "text/css; charset=utf-8" }
    ".js" { "text/javascript; charset=utf-8" }
    ".json" { "application/json; charset=utf-8" }
    default { "application/octet-stream" }
  }
}

try {
  while ($true) {
    $client = $tcp.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $reader = [System.IO.StreamReader]::new($stream)
      $requestLine = $reader.ReadLine()
      while ($reader.Peek() -ge 0) {
        $line = $reader.ReadLine()
        if ([string]::IsNullOrEmpty($line)) { break }
      }

      $requestPath = "/"
      if ($requestLine -match "^[A-Z]+\s+([^\s]+)") {
        $requestPath = $Matches[1].Split("?")[0]
      }
      $requestPath = [System.Uri]::UnescapeDataString($requestPath.TrimStart("/"))
      if ([string]::IsNullOrWhiteSpace($requestPath)) {
        $requestPath = "preview.html"
      }

      $filePath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($root, $requestPath))
      $rootPath = [System.IO.Path]::GetFullPath($root)
      if ((-not $filePath.StartsWith($rootPath)) -or (-not [System.IO.File]::Exists($filePath))) {
        $body = [System.Text.Encoding]::UTF8.GetBytes("Not found")
        $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
        $headBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
        $stream.Write($headBytes, 0, $headBytes.Length)
        $stream.Write($body, 0, $body.Length)
      }
      else {
        $body = [System.IO.File]::ReadAllBytes($filePath)
        $type = Get-ContentType $filePath
        $header = "HTTP/1.1 200 OK`r`nContent-Type: $type`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
        $headBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
        $stream.Write($headBytes, 0, $headBytes.Length)
        $stream.Write($body, 0, $body.Length)
      }
    }
    finally {
      $client.Close()
    }
  }
}
finally {
  $tcp.Stop()
}
