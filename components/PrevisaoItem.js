import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

import Cartao from './Cartao';


const PrevisaoItem = (props) => {
    return (
        <Cartao estilos={styles.cartao}>
        <View style={styles.tela}>

            <View>
                <Image
                    style={styles.imagem}
                    source={{ uri: 'https://openweathermap.org/img/wn/' + props.previsao.weather[0].icon + '.png' }}
                />
                <View style={styles.primeiraLinha}>
                    <Text style={styles.titulo}>
                        {new Date(props.previsao.dt * 1000).getDay()
                            + '/' + new Date(props.previsao.dt * 1000).getMonth()
                            + '/' + new Date(props.previsao.dt * 1000).getFullYear()
                        } - {props.previsao.weather[0].description.toUpperCase()}
                    </Text>
                </View>
                <View style={styles.proximaLinha}>
                    <View style={styles.valor}>
                        <Text>
                            Nascer do Sol: {new Date(props.previsao.sunrise * 1000).toLocaleTimeString()}
                        </Text>
                        <Text>
                            Pôr do Sol: {new Date(props.previsao.sunset * 1000).toLocaleTimeString()}
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={styles.proximaLinha}>
                        <Text>
                            Sensação térmica:{" "}
                            {Math.round(props.previsao.main.feels_like) + "\u00B0"}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    </Cartao>
    );
}

const styles = StyleSheet.create({
    cartao: {
      marginBottom: 8
    },
    tela: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-evenly'
    },
    primeiraLinha: {
      justifyContent: 'center',
      flexDirection: 'row'
    },
    segundaLinha: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 4,
      borderTopWidth: 1,
      borderTopColor: '#DDD'
    },
    imagem: {
      width: 50,
      height: 50
    },
    valor: {
      marginHorizontal: 2
    }
  });

export default PrevisaoItem;