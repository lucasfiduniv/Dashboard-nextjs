import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { BarChart, XAxis } from "react-native-svg-charts";

interface Produto {
  nome: string;
  quantidade: number;
}

interface Props {
  totalVendas: number;
  valorTotal: number;
  produtos: Produto[];
}

const VendasDoDia = ({ totalVendas, valorTotal }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Vendas do Dia</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Total de Vendas: {totalVendas}</Text>
        <Text style={styles.infoText}>
          Valor Total: R$ {valorTotal.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const ProdutosMaisVendidos = ({ produtos }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Produtos Mais Vendidos</Text>
      <FlatList
        data={produtos}
        renderItem={({ item }) => (
          <View style={styles.produto}>
            <Text style={styles.produtoNome}>{item.nome}</Text>
            <Text style={styles.produtoQuantidade}>
              Vendidos: {item.quantidade}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const VendasPage = () => {
  const dadosExemplo: Props = {
    totalVendas: 10,
    valorTotal: 1000,
    produtos: [
      { nome: "Produto A", quantidade: 5 },
      { nome: "Produto B", quantidade: 3 },
      { nome: "Produto C", quantidade: 2 },
    ],
  };

  // Dados de exemplo para as vendas por dia
  const vendasPorDia = [10, 20, 15, 25, 30, 20, 15];

  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("CriarVenda");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Adicionar Venda</Text>
      </TouchableOpacity>
      <VendasDoDia
        totalVendas={dadosExemplo.totalVendas}
        valorTotal={dadosExemplo.valorTotal}
      />
      <ProdutosMaisVendidos produtos={dadosExemplo.produtos} />
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Vendas por Dia</Text>
        <BarChart
          style={{ height: 200 }}
          data={vendasPorDia}
          svg={{ fill: "rgb(134, 65, 244)" }}
          contentInset={{ top: 30, bottom: 30 }}
        />
        <XAxis
          style={{ marginHorizontal: -10, marginTop: 10 }}
          data={["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"]}
          formatLabel={(value, index) =>
            ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"][index]
          }
          contentInset={{ left: 10, right: 10 }}
          svg={{ fontSize: 10, fill: "black" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  infoContainer: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
  produto: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  produtoNome: {
    fontSize: 16,
    fontWeight: "bold",
  },
  produtoQuantidade: {
    fontSize: 16,
    color: "#666",
  },
  button: {
    backgroundColor: "#00FF00",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  chartContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  chartTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default VendasPage;
