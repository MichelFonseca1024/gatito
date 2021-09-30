import { StyleSheet } from 'react-native'
import { cores } from '../../estilos'

export default StyleSheet.create({
  conteudo: {
    backgroundColor: cores.roxo,
    flexDirection: 'row',
    justifyContent: 'space-around',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 24,
  },
  total: {
    alignItems: 'center',
  },
  descricao: {
    fontSize: 16,
    color: cores.claro,
    fontWeight: 'bold',
    flexGrow: 1,
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    color: cores.laranja,
    flexGrow: 1,
  },
  botao: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
})
