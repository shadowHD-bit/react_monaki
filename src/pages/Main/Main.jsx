import React, { useEffect, useState } from "react";
import ItemsCard from "../../components/ItemsCard/ItemsCard";
import Layout from "../../components/Layout/Layout";
import Line from "../../components/Line/Line";
import Placeholder from "../../components/Placeholder/Placeholder";
import Rare from "../../components/Rare/Rare";
import stylesMain from "./Main.module.css";

export default function Main() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 3000)
  }, [])

  if(!loading){
    return <Placeholder />
  }
  else{
    return (
      <main className={stylesMain.main}>
        <Layout />
        <Line children={"New Collection"} />
        <ItemsCard />
        <Line children={"Our Marketplace"} />
        <Rare />
        <Line children={"Top Collection"} />
      </main>
    );
  }
}
