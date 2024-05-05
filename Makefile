PORT ?= 8000
DIRECTORY ?= src

serve:
	@echo "Starting HTTP server on port $(PORT) in $(DIRECTORY)"
	@python3 -m http.server $(PORT) --directory $(DIRECTORY) 

list-port:
	@lsof -i tcp:$(PORT) || echo "Port $(PORT) not found"

kill-port:
	lsof -t -i tcp:$(PORT) | xargs kill || true

.PHONY: serve
