#!/bin/bash
#script para gerar os arquivos já com a parte que o beecrowd exige
for i in $(seq 02 40); do touch ${i}.js; done
