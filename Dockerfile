FROM python:3.8-slim as dependencies

WORKDIR /app
RUN python3 -m venv /venv
ENV PATH=/venv/bin:$PATH

RUN pwd
RUN ls
COPY Justfile .
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.8-slim as prod

WORKDIR /app/
COPY --from=dependencies /venv /venv
ENV PATH=/venv/bin:$PATH

COPY . /app
ENV PYTHONPATH /app
CMD ["uvicorn", "--host=0.0.0.0", "--port=5022", "--reload", "backend.api.app:app"]
