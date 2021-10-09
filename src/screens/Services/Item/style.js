import { StyleSheet } from 'react-native'
import { colors } from '../../../style'

export default StyleSheet.create({
  information: {
    padding: 24,
  },
  name: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 16,
  },
  calculation: {
    color: colors.black,
    fontSize: 14,
    marginVertical: 8,
  },
  price: {
    color: colors.purple,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  divider: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  cart: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  value: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  description: {
    color: colors.black,
    fontSize: 16,
    marginRight: 8,
  },
  quantity: {
    width: 42,
  },
})
