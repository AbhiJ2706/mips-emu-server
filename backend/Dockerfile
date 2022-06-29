#syntax=docker/dockerfile:1

FROM ubuntu:latest

COPY . .

RUN apt-get update

RUN apt-get install -y python3.10 && ln -s /usr/bin/python3.10 /usr/bin/python3

RUN apt install -y python3.10-distutils

RUN apt install -y python3.10-dev

COPY requirements.txt /py/requirements.txt

# RUN pip3 install -r /py/requirements.txt

RUN apt install -y g++

WORKDIR ./py

RUN python3 module_setup.py install

WORKDIR ..

RUN g++ -std=c++14 ./py/asm.cc ./py/scanner.cc -g -o ./py/asm

RUN apt install -y nodejs npm

RUN npm install dotenv

RUN npm install

EXPOSE 3001

ENTRYPOINT node index.js



