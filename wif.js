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
const hexKey = 'f9e01894d011d7120a0742adcdcb31378f481a7e046a040e0ede6f0ce5643931'; // Substitua pela sua chave hexadecimal
const wifKey = hexToWIF(hexKey);

console.log('Chave WIF:', wifKey);
