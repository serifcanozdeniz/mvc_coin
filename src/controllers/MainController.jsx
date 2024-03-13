import { useEffect, useState } from "react";
import MainView from "../views/MainView";
import MainModel from "../models/MainModel";

const MainController = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // her yeni coin cevap geldiğinde önceki cevabın üzerine ekle
    MainModel.getCoins(page)
      .then((data) => setCoins(coins.concat(data)))
      .catch((err) => console.log(err));
  }, [page]);

  return <MainView coins={coins} setPage={setPage} />;
};

export default MainController;
