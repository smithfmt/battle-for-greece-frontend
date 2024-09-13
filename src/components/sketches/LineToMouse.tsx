import React, {useEffect, useState} from "react";
import Sketch from "react-p5";
import p5Types from "p5"
import _ from "lodash";

type Props = {
    cardId: string,
};

const LineToMouse = ({ cardId }:Props) => {
    const [newPosition, setNewPosition] = useState([0,0])
    const [zoom, setZoom] = useState(Math.round(window.devicePixelRatio*100))
    
    const checkZoom = () => {     
        const newZoom = Math.round(window.devicePixelRatio*1000)/10;
        const element = document.getElementById(cardId);
        if (element) {
            const elementPosition = element.getBoundingClientRect();
            setNewPosition([elementPosition.x+element.offsetWidth/2, elementPosition.y+element.offsetHeight/2]);
        };       
        setZoom(newZoom);
    };
    window.onresize = checkZoom;

    useEffect(() => {
        const element = document.getElementById(cardId);
        if (element) {
            const elementPosition = element.getBoundingClientRect();
            setNewPosition([elementPosition.x+element.offsetWidth/2, elementPosition.y+element.offsetHeight/2]);
        };    
    }, [cardId]);

    let x = window.innerWidth/2 - newPosition[0];
    let y = window.innerHeight/2 - newPosition[1];
    if (newPosition[0]<window.innerWidth) x = newPosition[0]-window.innerWidth/2;
    if (newPosition[1]<window.innerHeight) y = newPosition[1]-window.innerHeight/2;
    const cardPosition = [x,y];

    const setup = (p5: p5Types, canvasParentRef: Element) => {
		const cnv = p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
        cnv.position(0,0, "fixed")
	}; 

	const draw = (p5: p5Types) => {
        p5.clear(0,0,0,0)
        const mX = p5.map(p5.mouseX, 0, p5.width, -p5.width / 2, p5.width / 2);
        const mY = p5.map(p5.mouseY, 0, p5.height, -p5.height / 2, p5.height / 2);
        if (mX===-(window.innerWidth/2)&&mY===-(window.innerHeight/2)) return;
        
        p5.translate(p5.width / 2, p5.height / 2);
        p5.stroke(240, 70);
        p5.strokeWeight(10);
        p5.line(cardPosition[0], cardPosition[1], mX, mY);
	};
    // if (_.isEqual(newPosition,[0,0])) {
    //     console.log("hi")
    //     return <div></div>}
	return <Sketch setup={setup as any} draw={draw as any} key={zoom}/>;
}
export default LineToMouse;
