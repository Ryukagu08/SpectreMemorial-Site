import http.server
import socketserver

PORT = 8000


class CORSHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")

        # We disable caching so it instantly shows changes
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")

        super().end_headers()


Handler = CORSHTTPRequestHandler
httpd = socketserver.TCPServer(("", PORT), Handler)

print(f"\033[0;94m Serving at port {PORT} \033[0m")
print(f"\033[0;92m Open at http://localhost:8000 \033[0m")
httpd.serve_forever()
