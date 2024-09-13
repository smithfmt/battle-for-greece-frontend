import React, { useEffect } from "react";
import { CardType } from "../../frontend-types";
import Card from "./Card";
import { colors, colorConvert, connectImages } from "../../frontend-helpers";

type Props = {
    shopOrder: CardType[],
    setBuyingOpen: Function,
    buyingOpen: CardType|null,
    setShopOpen: Function,
    payment: CardType[], 
    setPayment: Function,
    addToHand: Function,
    removeFromPayment: Function,
    buyCard: Function,
    canBuy: boolean,
    cycleShop: number,
};

const Shop = ({ shopOrder, setBuyingOpen, buyingOpen, setShopOpen, payment, setPayment, addToHand, removeFromPayment, buyCard, canBuy, cycleShop }:Props) => {

    useEffect(()=> {
        return(()=>{setBuyingOpen(null)});
    },[setBuyingOpen]);
    let num = 0;
    return (
        <div 
            className="shop-modal-outer container"
            onClick={(e) => {
                if (e.currentTarget===e.target) {
                    setShopOpen(false);
                };
            }}
        >
            <div className="shop-modal-inner container">
                {[shopOrder[0],shopOrder[1],shopOrder[2]].map((card, index) => {
                    num++;
                    return (
                        <div key={`${num}shopCard`} className="shop-card-container" onClick={()=>setBuyingOpen(card)}>
                            <div className="cost-container container">
                                {card.costArr?card.costArr.map(col => {
                                    num++;
                                    return (
                                        <div key={`${num}cost`} className="cost" style={{backgroundColor:`rgba(${colors[col]})`}}></div>
                                    );
                                }):""}
                            </div>
                            <Card card={card} select={true} />
                            <div className="menu-button shop-cycle">
                                {cycleShop+index}
                            </div>
                        </div>
                    );
                })}
            </div>
            {buyingOpen?
            <div 
                className="buy-modal-outer container" 
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setBuyingOpen(!buyingOpen);
                        setPayment([]);
                    };
                }}
            >
                <div className="buy-modal-inner container">
                    <div className="shop-card-container">
                        <Card card={buyingOpen} select={true} />
                    </div>
                    <div className="payment-container container">
                        <div className="cost-container container">
                            {buyingOpen.costArr?buyingOpen.costArr.map(col => {
                                num++;
                                return (
                                    <div className="container" style={{flexDirection: "column"}}>
                                        <div key={`${num}cost`} className="cost" style={{backgroundColor:`rgba(${colors[col]})`}}></div>
                                        <div className="payment connector" style={{backgroundColor: `rgba(${colors[col]})`}}><img className="connect-image" src={connectImages[colorConvert(col)]} alt="connector" /></div>
                                    </div>
                                );
                            }):""}
                        </div>
                        <div className="card-deposit-container container">
                            {payment.length? payment.map((card) => {
                                return (
                                    <div className="card-deposit-slot" onClick={() => {
                                        addToHand(card);
                                        removeFromPayment(card);
                                    }}>
                                        <Card card={card} payment={true} />
                                    </div>
                                );
                            }):""}
                        </div>
                    </div>
                    <button className={`buy-card-button ${canBuy?"can-buy":""} container`} onClick={() => buyCard()}>
                            {canBuy?<div className="dot" />:""}
                            <p>Purchase Card</p>
                            {canBuy?<div className="dot" />:""}
                    </button>
                </div>
            </div>
            :""}
        </div>
    )
};

export default Shop;