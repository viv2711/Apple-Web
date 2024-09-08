import React, { useEffect, useState, useRef } from "react";
import { highlightsSlides } from "../constants/index.js";
import { playImg, replayImg, pauseImg } from "../utils/index.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

