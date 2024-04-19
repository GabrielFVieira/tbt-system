# Trace-Based Testing System

Este repositório contém uma cópia da aplicação OpenTelemetry Demo, que deve ser usado como objeto de estudo para testar algumas ferramentas de teste baseadas em Trace.

O repositório original pode ser encontrado em: https://github.com/open-telemetry/opentelemetry-demo.

Os objetivos deste repositório são:

- Testar as capacidades das ferramentas com o sistema funcionando corretamente.
- Criar alguns erros intencionais em vários serviços e validar a capacidade das ferramentas para ajudar a encontrar a raiz do erro.
- Criar alguns problemas de performance nas aplicações e validar a capacidade das ferramentas criarem testes medindo a duração dos spans.

O OpenTelemetry Demo foi escolhido devido à sua complexidade e observabilidade bem implementada usando o protocolo OpenTelemetry, que é amplamente adotado no mercado e utilizado por todas as ferramentas atuais de testes Trace-Based.

A ramificação principal conterá o código original da tag [v1.5.0](https://github.com/open-telemetry/opentelemetry-demo/tree/1.5.0) no repositório original, enquanto as outras ramificações conterão algumas alterações nos serviços para simular cenários de erros.

> **Obs.:** Este projeto não é um fork do repositório original porque não há razão para continuar atualizando-o com novos commits no repositório da comunidade, além disso, como ele se destina a ser usado apenas para o meu cenário específico de TCC, não haverá commits valiosos para sincronizar com o repositório original.

## Cenário 1:

Esta branch contém o código do objeto de estudo a ser utilizado para o Cenário 1, sendo assim é o código inalterado da versão 1.5.0 do OpenTelemetry Demo. A única diferença é a adição de mais um gráfico do Grafana, que será utilizado na etapa de análise dos recursos utlizados
