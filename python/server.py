import http.server
import socketserver

DEBUG = False  # Turn on server-side debugging
PORT = 8000


class CORSHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")

        # We disable caching so it instantly shows changes
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")

        super().end_headers()

    def log_message(self, format, *args):
        if not DEBUG:
            pass


Handler = CORSHTTPRequestHandler
httpd = socketserver.TCPServer(("", PORT), Handler)

print(f"\033[0;94m Serving at port {PORT} \033[0m")
print(f"\033[0;92m Open at http://localhost:8000 \033[0m")
httpd.serve_forever()
