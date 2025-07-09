import React from "react";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landingPage/home/Hero";

//Test Suite multiple test case //

describe('Hero Component',()=>{
    test('renders hero image', ()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText("Hero Image");
        except(heroImage).toBeInTheDocumnet();
        except(heroImage).toHaveAttribute("src","media/images/homeHero.png")
    });
});