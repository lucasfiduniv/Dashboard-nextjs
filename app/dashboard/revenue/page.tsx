"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data1 = [
  { name: "Domingo", receita: 4000 },
  { name: "Segunda-Feira", receita: 3000 },
  { name: "Terça-Feira", receita: 2000 },
  { name: "Quarta-Feira", receita: 2780 },
  { name: "Quinta-Feira", receita: 1890 },
  { name: "Sexta-Feira", receita: 2390 },
  { name: "Sábado", receita: 3490 },
];

const data2 = [
  { name: "Domingo", receita: 3000 },
  { name: "Segunda-Feira", receita: 2500 },
  { name: "Terça-Feira", receita: 2200 },
  { name: "Quarta-Feira", receita: 3000 },
  { name: "Quinta-Feira", receita: 1800 },
  { name: "Sexta-Feira", receita: 2700 },
  { name: "Sábado", receita: 3800 },
];

const data3 = [
  { name: "Domingo", receita: 3500 },
  { name: "Segunda-Feira", receita: 2800 },
  { name: "Terça-Feira", receita: 2600 },
  { name: "Quarta-Feira", receita: 3200 },
  { name: "Quinta-Feira", receita: 2000 },
  { name: "Sexta-Feira", receita: 2900 },
  { name: "Sábado", receita: 4000 },
];

const ChartPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">
        Gráficos de Receita Semanal
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#151c2c] p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Semana 1</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data1}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{ background: "#151c2c", border: "none" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="receita"
                stroke="#8884d8"
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-[#151c2c] p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Semana 2</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data2}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{ background: "#151c2c", border: "none" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="receita"
                stroke="#82ca9d"
                strokeDasharray="3 4 5 2"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-[#151c2c] p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Semana 3</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data3}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{ background: "#151c2c", border: "none" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="receita"
                stroke="#ff7300"
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
