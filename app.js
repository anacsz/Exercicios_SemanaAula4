
console.log('..................................')
console.log('     Projeto Livraria             ')
console.log('..................................')

const livros = require('./database')

const pegarInput = require('readline-sync')

const livrosCategoria = pegarInput.question('Voce deseja encontrar livro por Categoria? {S/N} ')

if(livrosCategoria.toLocaleUpperCase() ==='S')
{
    console.log('Essas são as opçoes disponiveis:')
    console.log('Romance ', 'Mistério ','Aventura')

    const qualCategoria = pegarInput.question('Qual Categoria voce escolhe?')

    const categorias = livros.filter(livros => livros.categoria===qualCategoria)

    console.log(categorias)

    
}
else
{
    const qualRecomendar = pegarInput.question('Me recomenda livros pra ler ?{S/N} ')

    const recomenda = livros.filter(livros => livros.recomenda===qualRecomendar)

    console.log(recomenda)
}