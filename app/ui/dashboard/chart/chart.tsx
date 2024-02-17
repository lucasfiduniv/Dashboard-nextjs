"use client";

import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Domingo",
    visitas: 4000,
    cliques: 2400,
  },
  {
    name: "Segunda-Feira",
    visitas: 3000,
    cliques: 1398,
  },
  {
    name: "Terça-Feira",
    visitas: 2000,
    cliques: 3800,
  },
  {
    name: "Quarta-Feira",
    visitas: 2780,
    cliques: 3908,
  },
  {
    name: "Quinta-Feira",
    visitas: 1890,
    cliques: 4800,
  },
  {
    name: "Sexta-Feira",
    visitas: 2390,
    cliques: 3800,
  },
  {
    name: "Sábado",
    visitas: 3490,
    cliques: 4300,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gráfico da Semana</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visitas"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="cliques"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
