const bitcoin = require('bitcoinjs-lib');
const bs58check = require('bs58check');

// Função para converter chave hexadecimal para WIF
function hexToWIF(hexKey) {
  // Adiciona o prefixo 0x80 (128 em decimal) no início da chave hexadecimal
  const prefix = Buffer.from('80', 'hex');
  const keyBuffer = Buffer.concat([prefix, Buffer.from(hexKey, 'hex')]);

  // Adiciona um sufixo de 0x01 se for uma chave comprimida
  const compressed = Buffer.from('01', 'hex');
  const keyBufferCompressed = Buffer.concat([keyBuffer, compressed]);

  // Calcula o checksum e concatena com a chave
  const wif = bs58check.encode(keyBufferCompressed);
  return wif;
}

// Exemplo de uso
const hexKey = 'd0c3ba7afa7cc573b1e13277afd65dea7cd89a9bc27d9e5a1b9f60de880c0ec4'; // Substitua pela sua chave hexadecimal
const wifKey = hexToWIF(hexKey);

console.log('Chave WIF:', wifKey);
