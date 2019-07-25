import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentPage } from '../../../actions';
import MenuButtons from '../../common/MenuButtons';
import FazeLanding from '../FazeLanding';

const FazeOneSvg = props => (
    <svg
      id="prefix__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 266 229.1"
      xmlSpace="preserve"
      {...props}
    >
      <style>{'.prefix__st1{fill:#ffb900}'}</style>
      <g id="prefix__Group_2016" transform="translate(-1489.723 -2600.202)">
        <g
          id="prefix__Group_1997"
          transform="translate(1489.723 2601.793)"
          opacity={0.57}
        >
          <g id="prefix__Group_1938" transform="translate(244.23 45.7)">
            <g id="prefix__Group_1936" transform="translate(2.947)">
              <path
                id="prefix__Path_1323"
                className="prefix__st1 faze_one_animate"
                d="M6 13.1c-.5 0-.9-.3-1.1-.7L.1 1.7C-.2 1.1.1.4.7.1c.6-.3 1.3 0 1.6.6l4.8 10.7c.3.6 0 1.3-.6 1.6-.1.1-.3.1-.5.1z"
              />
            </g>
            <g id="prefix__Group_1937" transform="translate(0 2.946)">
              <path
                id="prefix__Path_1324"
                className="prefix__st1"
                d="M1.2 7.2C.5 7.2 0 6.7 0 6c0-.5.3-.9.7-1.1L11.4.1c.6-.3 1.3 0 1.6.6.3.6 0 1.3-.6 1.6L1.7 7.1c-.1.1-.3.1-.5.1z"
              />
            </g>
          </g>
          <g id="prefix__Group_1941" transform="translate(103.312 17.064)">
            <g id="prefix__Group_1939" transform="translate(2.704)">
              <linearGradient
                id="prefix__Path_1325_1_"
                gradientUnits="userSpaceOnUse"
                x1={-322.988}
                y1={464.399}
                x2={-321.802}
                y2={464.399}
                gradientTransform="matrix(4.4207 0 0 -9.8433 1057.013 4576.104)"
              >
                <stop offset={0} stopColor="#ff3500" />
                <stop offset={1} stopColor="#ff6e00" />
              </linearGradient>
              <path
                id="prefix__Path_1325"
                d="M.9 9.8H.6c-.5-.2-.7-.7-.6-1.1L2.7.6c.1-.5.6-.7 1.1-.6.5.1.7.6.6 1.1L1.7 9.2c-.1.4-.4.6-.8.6z"
                fill="url(#prefix__Path_1325_1_)"
              />
            </g>
            <g id="prefix__Group_1940" transform="translate(0 2.704)">
              <linearGradient
                id="prefix__Path_1326_1_"
                gradientUnits="userSpaceOnUse"
                x1={-295.45}
                y1={426.746}
                x2={-294.483}
                y2={426.746}
                gradientTransform="matrix(9.8265 0 0 -4.4167 2533.359 1887.036)"
              >
                <stop offset={0} stopColor="#ff3500" />
                <stop offset={1} stopColor="#ff6e00" />
              </linearGradient>
              <path
                id="prefix__Path_1326"
                d="M8.9 4.4h-.3l-8-2.7C.1 1.6-.1 1.1 0 .6.2.1.7-.1 1.1 0l8.1 2.7c.5.2.7.6.6 1.1-.1.4-.5.6-.9.6z"
                fill="url(#prefix__Path_1326_1_)"
              />
            </g>
          </g>
          <path
            className="faze_one_animate_2"
            id="prefix__Path_1327"
            d="M56 102.7s-11.6-18 12.4-36.9c16.5-13 43.7-1.5 50.8-25.3 9.2-31 60.2-30.4 68.3-5s45 18.9 53.7 46.3-17.8 37.6-17.8 77.4c0 55.7-93.7 74.5-115.4 27.5s-52-84-52-84z"
            fill="#f90"
          />
          <g transform="translate(47.69 24.854)" id="prefix__Group_1960">
            <defs>
              <path
                id="prefix__SVGID_1_"
                d="M115.7 2.4S100-4.1 83.7 4s-34.9 8.1-56.3 6.5C9.1 9.2-7.9 30.1 4 47.4s61.5 27.7 61.5 27.7l61.1-50.5-10.9-22.2z"
              />
            </defs>
            <clipPath id="prefix__SVGID_2_">
              <use xlinkHref="#prefix__SVGID_1_" overflow="visible" />
            </clipPath>
            <g id="prefix__Group_1959" clipPath="url(#prefix__SVGID_2_)">
              <g id="prefix__Group_1958" transform="translate(-2.524 8.644)">
                <g id="prefix__Group_1942">
                  <linearGradient
                    id="prefix__Rectangle_247_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={303.358}
                    x2={-214.899}
                    y2={303.358}
                    gradientTransform="matrix(135.697 0 0 -1.618 29296.775 491.642)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_247"
                    fill="url(#prefix__Rectangle_247_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
                <g id="prefix__Group_1943" transform="translate(0 6.211)">
                  <linearGradient
                    id="prefix__Rectangle_248_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={297.147}
                    x2={-214.899}
                    y2={297.147}
                    gradientTransform="matrix(135.697 0 0 -1.618 29296.775 481.592)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_248"
                    fill="url(#prefix__Rectangle_248_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
                <g id="prefix__Group_1944" transform="translate(0 3.107)">
                  <linearGradient
                    id="prefix__Rectangle_249_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={300.144}
                    x2={-214.899}
                    y2={300.144}
                    gradientTransform="matrix(135.697 0 0 -1.617 29296.775 486.141)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_249"
                    fill="url(#prefix__Rectangle_249_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
                <g id="prefix__Group_1945" transform="translate(0 9.317)">
                  <linearGradient
                    id="prefix__Rectangle_250_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={294.041}
                    x2={-214.899}
                    y2={294.041}
                    gradientTransform="matrix(135.697 0 0 -1.618 29296.775 476.567)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_250"
                    fill="url(#prefix__Rectangle_250_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
                <g id="prefix__Group_1946" transform="translate(0 12.422)">
                  <linearGradient
                    id="prefix__Rectangle_251_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={290.936}
                    x2={-214.899}
                    y2={290.936}
                    gradientTransform="matrix(135.697 0 0 -1.618 29296.775 471.543)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_251"
                    fill="url(#prefix__Rectangle_251_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
                <g id="prefix__Group_1947" transform="translate(0 18.635)">
                  <linearGradient
                    id="prefix__Rectangle_252_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={284.723}
                    x2={-214.899}
                    y2={284.723}
                    gradientTransform="matrix(135.697 0 0 -1.618 29296.775 461.49)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_252"
                    fill="url(#prefix__Rectangle_252_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
                <g id="prefix__Group_1948" transform="translate(0 15.529)">
                  <linearGradient
                    id="prefix__Rectangle_253_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={287.722}
                    x2={-214.899}
                    y2={287.722}
                    gradientTransform="matrix(135.697 0 0 -1.617 29296.775 466.055)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_253"
                    fill="url(#prefix__Rectangle_253_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
                <g id="prefix__Group_1949" transform="translate(0 24.845)">
                  <linearGradient
                    id="prefix__Rectangle_254_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={278.62}
                    x2={-214.899}
                    y2={278.62}
                    gradientTransform="matrix(135.697 0 0 -1.619 29296.775 451.895)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_254"
                    fill="url(#prefix__Rectangle_254_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
                <g id="prefix__Group_1950" transform="translate(0 21.74)">
                  <linearGradient
                    id="prefix__Rectangle_255_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={281.618}
                    x2={-214.899}
                    y2={281.618}
                    gradientTransform="matrix(135.697 0 0 -1.618 29296.775 456.467)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_255"
                    fill="url(#prefix__Rectangle_255_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
                <g id="prefix__Group_1951" transform="translate(0 31.057)">
                  <linearGradient
                    id="prefix__Rectangle_256_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={272.087}
                    x2={-214.899}
                    y2={272.087}
                    gradientTransform="matrix(135.697 0 0 -1.616 29296.775 440.5)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_256"
                    fill="url(#prefix__Rectangle_256_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
                <g id="prefix__Group_1952" transform="translate(0 27.951)">
                  <linearGradient
                    id="prefix__Rectangle_257_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={275.407}
                    x2={-214.899}
                    y2={275.407}
                    gradientTransform="matrix(135.697 0 0 -1.618 29296.775 446.417)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_257"
                    fill="url(#prefix__Rectangle_257_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
                <g id="prefix__Group_1953" transform="translate(0 34.162)">
                  <linearGradient
                    id="prefix__Rectangle_258_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={269.089}
                    x2={-214.899}
                    y2={269.089}
                    gradientTransform="matrix(135.697 0 0 -1.617 29296.775 435.925)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_258"
                    fill="url(#prefix__Rectangle_258_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
                <g id="prefix__Group_1954" transform="translate(0 37.268)">
                  <linearGradient
                    id="prefix__Rectangle_259_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={266.09}
                    x2={-214.899}
                    y2={266.09}
                    gradientTransform="matrix(135.697 0 0 -1.618 29296.775 431.342)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_259"
                    fill="url(#prefix__Rectangle_259_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
                <g id="prefix__Group_1955" transform="translate(0 43.478)">
                  <linearGradient
                    id="prefix__Rectangle_260_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={259.987}
                    x2={-214.899}
                    y2={259.987}
                    gradientTransform="matrix(135.697 0 0 -1.619 29296.775 421.728)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_260"
                    fill="url(#prefix__Rectangle_260_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
                <g id="prefix__Group_1956" transform="translate(0 40.373)">
                  <linearGradient
                    id="prefix__Rectangle_261_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={262.985}
                    x2={-214.899}
                    y2={262.985}
                    gradientTransform="matrix(135.697 0 0 -1.618 29296.775 426.318)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_261"
                    fill="url(#prefix__Rectangle_261_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
                <g id="prefix__Group_1957" transform="translate(0 46.586)">
                  <linearGradient
                    id="prefix__Rectangle_262_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={-215.899}
                    y1={256.665}
                    x2={-214.899}
                    y2={256.665}
                    gradientTransform="matrix(135.697 0 0 -1.617 29296.775 415.835)"
                  >
                    <stop offset={0} stopColor="#ffbd00" />
                    <stop offset={1} stopColor="#ffb600" />
                  </linearGradient>
                  <path
                    id="prefix__Rectangle_262"
                    fill="url(#prefix__Rectangle_262_1_)"
                    d="M0 0h135.7v1.6H0z"
                  />
                </g>
              </g>
            </g>
          </g>
          <g transform="translate(208.5 3.714)" id="prefix__Group_1978">
            <defs>
              <circle id="prefix__SVGID_3_" cx={16.8} cy={16.8} r={16.6} />
            </defs>
            <clipPath id="prefix__SVGID_4_">
              <use xlinkHref="#prefix__SVGID_3_" overflow="visible" />
            </clipPath>
            <g id="prefix__Group_1977" clipPath="url(#prefix__SVGID_4_)">
              <g id="prefix__Group_1961" transform="translate(-10.638 -8.63)">
                <linearGradient
                  id="prefix__Rectangle_263_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={341.665}
                  x2={-365.724}
                  y2={341.665}
                  gradientTransform="matrix(54.819 0 0 -1.617 20103.465 553.28)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_263"
                  fill="url(#prefix__Rectangle_263_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1962" transform="translate(-10.638 -2.419)">
                <linearGradient
                  id="prefix__Rectangle_264_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={335.561}
                  x2={-365.724}
                  y2={335.561}
                  gradientTransform="matrix(54.819 0 0 -1.618 20103.465 543.746)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_264"
                  fill="url(#prefix__Rectangle_264_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1963" transform="translate(-10.638 -5.525)">
                <linearGradient
                  id="prefix__Rectangle_265_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={338.667}
                  x2={-365.724}
                  y2={338.667}
                  gradientTransform="matrix(54.819 0 0 -1.618 20103.465 548.772)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_265"
                  fill="url(#prefix__Rectangle_265_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1964" transform="translate(-10.638 .687)">
                <linearGradient
                  id="prefix__Rectangle_266_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={332.348}
                  x2={-365.724}
                  y2={332.348}
                  gradientTransform="matrix(54.819 0 0 -1.617 20103.465 538.215)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_266"
                  fill="url(#prefix__Rectangle_266_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1965" transform="translate(-10.638 3.793)">
                <linearGradient
                  id="prefix__Rectangle_267_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={329.349}
                  x2={-365.724}
                  y2={329.349}
                  gradientTransform="matrix(54.819 0 0 -1.618 20103.465 533.695)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_267"
                  fill="url(#prefix__Rectangle_267_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1966" transform="translate(-10.638 10.003)">
                <linearGradient
                  id="prefix__Rectangle_268_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={323.139}
                  x2={-365.724}
                  y2={323.139}
                  gradientTransform="matrix(54.819 0 0 -1.618 20103.465 523.648)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_268"
                  fill="url(#prefix__Rectangle_268_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1967" transform="translate(-10.638 6.899)">
                <linearGradient
                  id="prefix__Rectangle_269_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={326.136}
                  x2={-365.724}
                  y2={326.136}
                  gradientTransform="matrix(54.819 0 0 -1.617 20103.465 528.17)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_269"
                  fill="url(#prefix__Rectangle_269_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1968" transform="translate(-10.638 16.215)">
                <linearGradient
                  id="prefix__Rectangle_270_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={316.82}
                  x2={-365.724}
                  y2={316.82}
                  gradientTransform="matrix(54.819 0 0 -1.617 20103.465 513.106)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_270"
                  fill="url(#prefix__Rectangle_270_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1969" transform="translate(-10.638 13.11)">
                <linearGradient
                  id="prefix__Rectangle_271_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={319.925}
                  x2={-365.724}
                  y2={319.925}
                  gradientTransform="matrix(54.819 0 0 -1.617 20103.465 518.127)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_271"
                  fill="url(#prefix__Rectangle_271_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1970" transform="translate(-10.638 22.426)">
                <linearGradient
                  id="prefix__Rectangle_272_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={310.716}
                  x2={-365.724}
                  y2={310.716}
                  gradientTransform="matrix(54.819 0 0 -1.618 20103.465 503.547)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_272"
                  fill="url(#prefix__Rectangle_272_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1971" transform="translate(-10.638 19.321)">
                <linearGradient
                  id="prefix__Rectangle_273_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={313.821}
                  x2={-365.724}
                  y2={313.821}
                  gradientTransform="matrix(54.819 0 0 -1.618 20103.465 508.571)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_273"
                  fill="url(#prefix__Rectangle_273_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1972" transform="translate(-10.638 25.531)">
                <linearGradient
                  id="prefix__Rectangle_274_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={307.611}
                  x2={-365.724}
                  y2={307.611}
                  gradientTransform="matrix(54.819 0 0 -1.618 20103.465 498.523)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_274"
                  fill="url(#prefix__Rectangle_274_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1973" transform="translate(-10.638 28.638)">
                <linearGradient
                  id="prefix__Rectangle_275_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={304.397}
                  x2={-365.724}
                  y2={304.397}
                  gradientTransform="matrix(54.819 0 0 -1.617 20103.465 493.018)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_275"
                  fill="url(#prefix__Rectangle_275_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1974" transform="translate(-10.638 34.849)">
                <linearGradient
                  id="prefix__Rectangle_276_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={298.293}
                  x2={-365.724}
                  y2={298.293}
                  gradientTransform="matrix(54.819 0 0 -1.618 20103.465 483.447)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_276"
                  fill="url(#prefix__Rectangle_276_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1975" transform="translate(-10.638 31.743)">
                <linearGradient
                  id="prefix__Rectangle_277_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={301.399}
                  x2={-365.724}
                  y2={301.399}
                  gradientTransform="matrix(54.819 0 0 -1.618 20103.465 488.472)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_277"
                  fill="url(#prefix__Rectangle_277_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1976" transform="translate(-10.638 37.954)">
                <linearGradient
                  id="prefix__Rectangle_278_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-366.724}
                  y1={295.188}
                  x2={-365.724}
                  y2={295.188}
                  gradientTransform="matrix(54.819 0 0 -1.618 20103.465 478.423)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_278"
                  fill="url(#prefix__Rectangle_278_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
            </g>
          </g>
          <g transform="translate(0 153.523)" id="prefix__Group_1996">
            <defs>
              <path
                id="prefix__SVGID_5_"
                d="M49.2 24.6C49.2 11 38.2 0 24.6 0S0 11 0 24.6c0 13.6 11 24.6 24.6 24.6 13.6 0 24.6-11 24.6-24.6z"
              />
            </defs>
            <clipPath id="prefix__SVGID_6_">
              <use xlinkHref="#prefix__SVGID_5_" overflow="visible" />
            </clipPath>
            <g id="prefix__Group_1995" clipPath="url(#prefix__SVGID_6_)">
              <g id="prefix__Group_1979" transform="translate(-2.817 -.809)">
                <linearGradient
                  id="prefix__Rectangle_279_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={184.142}
                  x2={-165.045}
                  y2={184.142}
                  gradientTransform="matrix(54.819 0 0 -1.618 9102.443 298.75)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_279"
                  fill="url(#prefix__Rectangle_279_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1980" transform="translate(-2.817 5.403)">
                <linearGradient
                  id="prefix__Rectangle_280_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={177.716}
                  x2={-165.045}
                  y2={177.716}
                  gradientTransform="matrix(54.819 0 0 -1.616 9102.443 287.997)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_280"
                  fill="url(#prefix__Rectangle_280_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1981" transform="translate(-2.817 2.296)">
                <linearGradient
                  id="prefix__Rectangle_281_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={181.037}
                  x2={-165.045}
                  y2={181.037}
                  gradientTransform="matrix(54.819 0 0 -1.618 9102.443 293.726)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_281"
                  fill="url(#prefix__Rectangle_281_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1982" transform="translate(-2.817 8.508)">
                <linearGradient
                  id="prefix__Rectangle_282_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={174.825}
                  x2={-165.045}
                  y2={174.825}
                  gradientTransform="matrix(54.819 0 0 -1.618 9102.443 283.675)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_282"
                  fill="url(#prefix__Rectangle_282_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1983" transform="translate(-2.817 11.613)">
                <linearGradient
                  id="prefix__Rectangle_283_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={171.827}
                  x2={-165.045}
                  y2={171.827}
                  gradientTransform="matrix(54.819 0 0 -1.619 9102.443 278.997)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_283"
                  fill="url(#prefix__Rectangle_283_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1984" transform="translate(-2.817 17.824)">
                <linearGradient
                  id="prefix__Rectangle_284_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={165.402}
                  x2={-165.045}
                  y2={165.402}
                  gradientTransform="matrix(54.819 0 0 -1.617 9102.443 268.263)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_284"
                  fill="url(#prefix__Rectangle_284_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1985" transform="translate(-2.817 14.718)">
                <linearGradient
                  id="prefix__Rectangle_285_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={168.615}
                  x2={-165.045}
                  y2={168.615}
                  gradientTransform="matrix(54.819 0 0 -1.618 9102.443 273.628)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_285"
                  fill="url(#prefix__Rectangle_285_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1986" transform="translate(-2.817 24.036)">
                <linearGradient
                  id="prefix__Rectangle_286_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={159.19}
                  x2={-165.045}
                  y2={159.19}
                  gradientTransform="matrix(54.819 0 0 -1.617 9102.443 258.218)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_286"
                  fill="url(#prefix__Rectangle_286_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1987" transform="translate(-2.817 20.93)">
                <linearGradient
                  id="prefix__Rectangle_287_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={162.296}
                  x2={-165.045}
                  y2={162.296}
                  gradientTransform="matrix(54.819 0 0 -1.617 9102.443 263.24)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_287"
                  fill="url(#prefix__Rectangle_287_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1988" transform="translate(-2.817 30.247)">
                <linearGradient
                  id="prefix__Rectangle_288_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={153.086}
                  x2={-165.045}
                  y2={153.086}
                  gradientTransform="matrix(54.819 0 0 -1.618 9102.443 248.502)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_288"
                  fill="url(#prefix__Rectangle_288_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1989" transform="translate(-2.817 27.141)">
                <linearGradient
                  id="prefix__Rectangle_289_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={156.192}
                  x2={-165.045}
                  y2={156.192}
                  gradientTransform="matrix(54.819 0 0 -1.618 9102.443 253.527)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_289"
                  fill="url(#prefix__Rectangle_289_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1990" transform="translate(-2.817 33.353)">
                <linearGradient
                  id="prefix__Rectangle_290_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={149.873}
                  x2={-165.045}
                  y2={149.873}
                  gradientTransform="matrix(54.819 0 0 -1.617 9102.443 243.153)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_290"
                  fill="url(#prefix__Rectangle_290_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1991" transform="translate(-2.817 36.458)">
                <linearGradient
                  id="prefix__Rectangle_291_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={146.768}
                  x2={-165.045}
                  y2={146.768}
                  gradientTransform="matrix(54.819 0 0 -1.617 9102.443 238.132)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_291"
                  fill="url(#prefix__Rectangle_291_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1992" transform="translate(-2.817 42.67)">
                <linearGradient
                  id="prefix__Rectangle_292_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={140.556}
                  x2={-165.045}
                  y2={140.556}
                  gradientTransform="matrix(54.819 0 0 -1.617 9102.443 228.087)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_292"
                  fill="url(#prefix__Rectangle_292_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1993" transform="translate(-2.817 39.564)">
                <linearGradient
                  id="prefix__Rectangle_293_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={143.662}
                  x2={-165.045}
                  y2={143.662}
                  gradientTransform="matrix(54.819 0 0 -1.617 9102.443 233.11)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_293"
                  fill="url(#prefix__Rectangle_293_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
              <g id="prefix__Group_1994" transform="translate(-2.817 45.775)">
                <linearGradient
                  id="prefix__Rectangle_294_1_"
                  gradientUnits="userSpaceOnUse"
                  x1={-166.045}
                  y1={137.558}
                  x2={-165.045}
                  y2={137.558}
                  gradientTransform="matrix(54.819 0 0 -1.618 9102.443 223.377)"
                >
                  <stop offset={0} stopColor="#ffbd00" />
                  <stop offset={1} stopColor="#ffb600" />
                </linearGradient>
                <path
                  id="prefix__Rectangle_294"
                  fill="url(#prefix__Rectangle_294_1_)"
                  d="M0 0h54.8v1.6H0z"
                />
              </g>
            </g>
          </g>
          <path
            id="prefix__Path_1330"
            className="prefix__st1"
            d="M97.3 218c-7.4 0-14.8-.8-22-2.4-7.2-1.6-14.2-4.2-20.7-7.7-13.3-7-23.7-18.4-29.6-32.2-5.9-13.6-9.2-28.6-8.3-43.5.7-15.1 6.1-29.5 15.4-41.4 1.2-1.5 2.3-2.9 3.7-4.3.6-.7 1.3-1.4 1.9-2l2-1.9c.3-.3.7-.6 1-1l1.1-.9 2.2-1.8c.7-.6 1.5-1.1 2.3-1.7s1.5-1.1 2.3-1.6c1.6-1 3.1-2 4.8-2.9.8-.4 1.6-.9 2.5-1.3l2.5-1.2c.8-.4 1.7-.8 2.6-1.1l2.6-1.1 2.6-.9c.9-.3 1.8-.6 2.7-.8 7.2-2 14.6-3 22-3 1.9 0 3.7.1 5.6.3s3.7.4 5.5.6c3.7.4 7.3.7 11 .9s7.4.3 11 .2c3.7 0 7.3-.6 10.8-1.6 1.7-.5 3.2-1.5 4.3-3 .9-1.5 1.5-3.3 1.7-5 .5-3.6.7-7.3.7-11-.2-7.5 1.7-14.9 5.3-21.4 1.8-3.3 4-6.3 6.5-9.1C160.9 5.7 171.6.7 183 .1c7.5-.3 15 1.1 22 3.9 3.5 1.4 6.9 3.1 10 5.2 3.1 2.2 5.9 4.8 8.3 7.8 4.7 6 7.2 13.5 8.2 20.9.9 7.4 1 14.9.2 22.3-.3 3.7-.7 7.4-1.1 11.1-.4 3.7-.7 7.3-1.1 11-1 7.2-1.2 14.6-.7 21.9.3 3.6.9 7.2 1.7 10.7.9 3.6 1.6 7.3 2 11 .2 1.9.2 3.8.1 5.7-.1 1.9-.4 3.8-.7 5.6-.7 3.7-1.8 7.3-3.3 10.8-1.5 3.5-3.6 6.8-6.3 9.5-2.8 2.7-6 4.8-9.6 6.2-3.5 1.4-7.2 2.3-10.9 2.9-3.7.6-7.3 1.1-10.8 1.9-3.5.7-6.9 1.9-10.1 3.6-3.2 1.7-6 4-8.5 6.6-2.5 2.7-4.6 5.6-6.5 8.7-.5.8-1 1.6-1.5 2.3l-.8 1.2-.4.6-.4.5-1.8 2.2c-.6.7-1.3 1.4-1.9 2-5.3 5.2-11.5 9.4-18.3 12.5-13.9 6.3-28.6 9.4-43.5 9.3zm0-.3c7.4 0 14.7-.8 21.9-2.4 7.2-1.5 14.2-3.9 20.8-7.1 6.6-3.1 12.7-7.4 17.8-12.6.6-.7 1.3-1.3 1.8-2l1.7-2.1.4-.5.4-.6.7-1.2c.5-.8 1-1.5 1.4-2.3 1.8-3.3 4-6.3 6.5-9.1s5.5-5.2 8.7-7.1c3.3-1.8 6.9-3.2 10.6-4 3.6-.9 7.3-1.4 10.9-2.1 3.6-.6 7-1.6 10.4-2.9 3.3-1.3 6.3-3.3 8.8-5.8 2.5-2.5 4.5-5.5 5.8-8.8 1.4-3.3 2.5-6.8 3.1-10.3.7-3.5.9-7.1.6-10.7-.4-3.6-1.1-7.2-2-10.7-.9-3.6-1.5-7.4-1.8-11.1-.5-7.4-.3-14.9.8-22.3.4-3.7.8-7.4 1.2-11 .4-3.7.8-7.3 1.1-11 .7-7.3.7-14.6-.1-21.8-.9-7.2-3.3-14.2-7.6-19.9-2.2-2.8-4.8-5.3-7.7-7.4-3-2.1-6.2-3.8-9.5-5.1-6.7-2.8-13.9-4.2-21.2-4-7.3.2-14.4 2.4-20.5 6.3-3.1 1.9-5.9 4.3-8.4 7s-4.6 5.6-6.4 8.8c-.9 1.6-1.7 3.2-2.4 4.9-.7 1.7-1.3 3.4-1.7 5.2-.5 1.8-.8 3.6-1 5.4-.2 1.8-.3 3.6-.2 5.5 0 3.7-.2 7.4-.7 11.1-.3 1.9-.9 3.7-1.9 5.3-.6.8-1.3 1.5-2.1 2s-1.7.9-2.6 1.2c-3.6 1.1-7.3 1.6-11 1.7-3.7.1-7.4.1-11.1-.1s-7.4-.5-11-.9c-1.8-.2-3.7-.4-5.5-.5s-3.7-.2-5.5-.2c-7.3 0-14.6 1.1-21.6 3.3-.9.2-1.7.6-2.6.9l-2.6.9-2.5 1.1c-.8.3-1.7.7-2.5 1.1L56.6 73c-.8.4-1.6.9-2.4 1.3-1.7.7-3.2 1.7-4.7 2.7-6 4.1-11.3 9.2-15.8 14.9-4.5 5.7-8 12.2-10.5 19-2.4 6.9-3.9 14-4.4 21.3-.5 7.3 0 14.6 1.4 21.8 1.4 7.2 3.5 14.2 6.2 21 5.5 13.7 15.6 25.1 28.5 32.3 6.4 3.6 13.3 6.3 20.5 7.9 7.2 1.7 14.6 2.5 21.9 2.5z"
          />
          <image
            width={186}
            height={186}
            id="prefix__Rectangle_295"
            xlinkHref="../images/BC39D343EB717570.png"
            transform="translate(242.794 113.963) scale(.1248)"
            overflow="visible"
          />
          <path
            id="prefix__Path_1331"
            className="prefix__st1"
            d="M256.6 74.4c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-.9 2.2-2.2z"
          />
          <path
            id="prefix__Path_1332"
            className="prefix__st1"
            d="M55.2 29.8c.7 0 1.5-.1 2.2-.3 4.3-.9 7.9-2.7 11-.8 5.9 3.6 10.8 3.1 10.8 3.1 4.6-.2 8.2-3.2 8.2-6.9s-3.6-6.8-8.2-6.9H78.9c-.4 0-.8 0-1.2.1-5.9.5-12 3.6-15.3 2.5-2.3-.7-4.7-1.1-7.1-1.2-3.6 0-6.4 2.3-6.4 5.2s2.8 5.2 6.3 5.2z"
          />
          <path
            className="faze_one_animate"
            id="prefix__Path_1333"
            d="M149.8 43c0 25.5-3.1 34.7-51.8 29.3s-90 40.4-64.9 99.9c22.9 54.2 107.1 42.1 124.2 11.9 22.7-40 54.1-13.5 63.6-42.9 6.5-20.1-4.3-21.1-1.7-53.7s12.4-64.8-20.2-76C167.7.7 149.8 26.2 149.8 43z"
            fill="#fb0"
          />
        </g>
      </g>
    </svg>
)

const FazeThreeSvg = props => (
    <svg
        id="prefix__Group_2186"
        x={0}
        y={0}
        viewBox="0 0 267 243.1"
        xmlSpace="preserve"
        {...props}
    >
        <style>{'.prefix__st74{fill:#abdaed}'}</style>
        <linearGradient
        id="prefix__Path_2798_1_"
        gradientUnits="userSpaceOnUse"
        x1={-170.438}
        y1={517.157}
        x2={-171.067}
        y2={516.281}
        gradientTransform="matrix(237.2993 0 0 -172.4465 40649.75 89238.953)"
        >
        <stop offset={0} stopColor="#8fcbe1" />
        <stop offset={1} stopColor="#9dd7e9" />
        </linearGradient>
        <path
        id="prefix__Path_2798"
        className="faze_one_animate_2"
        d="M189 56.6s-10.7-41.3-36-44c-30.5-3.2-46 12-75.3 45.3S7.2 104.6 6.3 141.3c-.7 25.3 33.7 58.2 78 36 61.3-30.7 129.4 17.1 152.7-18.7 18.7-28.6-4-82-48-102z"
        fill="url(#prefix__Path_2798_1_)"
        />
        <g transform="translate(0 11.74)" id="prefix__Group_2177" opacity={0.59}>
        <defs>
            <path
            id="prefix__SVGID_1_"
            d="M156.6 43.2S126.1-4.1 97 .3 75.9 31.5 46.8 45.4s-72.2 45.3-27.5 70.5c96.2 54.4 58.2 92.4 119.8 87.2 54.7-4.6 42.2-92.3 42.2-92.3l-24.7-67.6z"
            />
        </defs>
        <clipPath id="prefix__SVGID_2_">
            <use xlinkHref="#prefix__SVGID_1_" overflow="visible" />
        </clipPath>
        <g id="prefix__Group_2176" clipPath="url(#prefix__SVGID_2_)">
            <g id="prefix__Group_2105" transform="translate(30.727 -.206)">
            <linearGradient
                id="prefix__Path_2799_1_"
                gradientUnits="userSpaceOnUse"
                x1={-201.588}
                y1={495.583}
                x2={-200.588}
                y2={495.583}
                gradientTransform="matrix(150.981 0 0 -23.9822 30435.916 11897.14)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2799"
                d="M.8 24L0 22.8c.4-.3 10.7-7.6 34.6-13.9C56.5 3.1 94.5-2.9 151 1.6l-.1 1.4c-56.2-4.5-94 1.4-115.8 7.2C11.4 16.5 1 23.9.8 24z"
                fill="url(#prefix__Path_2799_1_)"
            />
            </g>
            <g id="prefix__Group_2106" transform="translate(26.676 3.75)">
            <linearGradient
                id="prefix__Path_2800_1_"
                gradientUnits="userSpaceOnUse"
                x1={-197.479}
                y1={492.934}
                x2={-196.475}
                y2={492.934}
                gradientTransform="matrix(150.365 0 0 -27.0942 29701.916 13369.22)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2800"
                d="M.9 27.1L0 25.9c.4-.3 10.5-7.9 34.2-14.8C56 4.7 93.8-2.3 150.4.7l-.1 1.5C42.6-3.6 1.3 26.8.9 27.1z"
                fill="url(#prefix__Path_2800_1_)"
            />
            </g>
            <g id="prefix__Group_2107" transform="translate(34.363 9.245)">
            <linearGradient
                id="prefix__Path_2801_1_"
                gradientUnits="userSpaceOnUse"
                x1={-205.224}
                y1={486.131}
                x2={-204.224}
                y2={486.131}
                gradientTransform="matrix(150.981 0 0 -23.9817 30984.883 11670.242)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2801"
                d="M.8 24L0 22.8c.4-.3 10.7-7.6 34.6-13.9C56.5 3.1 94.5-2.9 151 1.6l-.1 1.4c-56.2-4.5-94 1.4-115.8 7.2C11.4 16.5 1 23.9.8 24z"
                fill="url(#prefix__Path_2801_1_)"
            />
            </g>
            <g id="prefix__Group_2108" transform="translate(29.927 13.257)">
            <linearGradient
                id="prefix__Path_2802_1_"
                gradientUnits="userSpaceOnUse"
                x1={-200.735}
                y1={483.491}
                x2={-199.731}
                y2={483.491}
                gradientTransform="matrix(150.7505 0 0 -27.2668 30268.594 13196.903)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2802"
                d="M.7 27.3c-.2 0-.4-.1-.5-.3-.2-.3-.1-.8.2-1h.1-.1v-.1s.1-.1.2-.1C9.1 20.7 56.1-4.4 150.8.7l-.1 1.5C56.4-2.9 9.8 22 1.4 27c-.2.1-.5.2-.7.3z"
                fill="url(#prefix__Path_2802_1_)"
            />
            </g>
            <g id="prefix__Group_2109" transform="translate(32.294 18.069)">
            <linearGradient
                id="prefix__Path_2803_1_"
                gradientUnits="userSpaceOnUse"
                x1={-203.09}
                y1={478.817}
                x2={-202.085}
                y2={478.817}
                gradientTransform="matrix(150.251 0 0 -27.647 30523.373 13251.65)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2803"
                d="M.9 27.6L0 26.5c.4-.3 10.5-7.9 34.1-15C55.9 5 93.7-2.2 150.3.6l-.1 1.5C42.4-3.2 1.3 27.3.9 27.6z"
                fill="url(#prefix__Path_2803_1_)"
            />
            </g>
            <g id="prefix__Group_2110" transform="translate(-8.495 21.83)">
            <linearGradient
                id="prefix__Path_2804_1_"
                gradientUnits="userSpaceOnUse"
                x1={-162.504}
                y1={479.127}
                x2={-161.491}
                y2={479.127}
                gradientTransform="matrix(186.4739 0 0 -47.0491 30317.412 22566.03)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2804"
                d="M.8 47L0 45.8c.2-.1 19.6-12.2 52.2-23.8C82.2 11.3 129.9-1.2 186.5.1v1.5C130.1.3 82.6 12.7 52.6 23.4 20.3 34.9 1 46.9.8 47z"
                fill="url(#prefix__Path_2804_1_)"
            />
            </g>
            <g id="prefix__Group_2111" transform="translate(-11.092 27.655)">
            <linearGradient
                id="prefix__Path_2805_1_"
                gradientUnits="userSpaceOnUse"
                x1={-159.997}
                y1={473.493}
                x2={-158.99}
                y2={473.493}
                gradientTransform="matrix(197.5642 0 0 -48.6467 31617.662 23058.215)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2805"
                d="M.7 48.6c-.2 0-.5-.1-.6-.4-.2-.4-.1-.8.3-1 .1 0 .1-.1.3-.1 6.4-3.4 29.7-15.5 62.9-26.5C110.4 5.1 155.4-1.7 197.6.4l-.1 1.5C99.8-3 11.2 43.1 1.4 48.4c-.1 0-.2.1-.3.1-.1.1-.3.1-.4.1zm.1-.7l.4.6-.4-.6z"
                fill="url(#prefix__Path_2805_1_)"
            />
            </g>
            <g id="prefix__Group_2112" transform="translate(-15.821 33.365)">
            <linearGradient
                id="prefix__Path_2806_1_"
                gradientUnits="userSpaceOnUse"
                x1={-155.262}
                y1={468.375}
                x2={-154.249}
                y2={468.375}
                gradientTransform="matrix(202.572 0 0 -54.377 31465.496 25495.97)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2806"
                d="M.9 54.4L0 53.2c.2-.1 17.2-12.9 50.5-25.8C81.3 15.5 132.6 1.1 202.5 0v1.5C132.9 2.6 81.7 16.9 51.1 28.7 18 41.5 1 54.3.9 54.4z"
                fill="url(#prefix__Path_2806_1_)"
            />
            </g>
            <g id="prefix__Group_2113" transform="translate(-3.405 40.007)">
            <linearGradient
                id="prefix__Path_2807_1_"
                gradientUnits="userSpaceOnUse"
                x1={-167.599}
                y1={460.95}
                x2={-166.587}
                y2={460.95}
                gradientTransform="matrix(186.4729 0 0 -47.0481 31266.398 21710.363)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2807"
                d="M.8 47L0 45.8c.2-.1 19.6-12.2 52.2-23.8C82.2 11.3 129.9-1.2 186.5.1v1.5C130.1.3 82.6 12.7 52.7 23.4 20.3 34.9 1 46.9.8 47z"
                fill="url(#prefix__Path_2807_1_)"
            />
            </g>
            <g id="prefix__Group_2114" transform="translate(-5.573 45.81)">
            <linearGradient
                id="prefix__Path_2808_1_"
                gradientUnits="userSpaceOnUse"
                x1={-165.517}
                y1={455.324}
                x2={-164.51}
                y2={455.324}
                gradientTransform="matrix(197.135 0 0 -48.5237 32636.588 22118.254)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2808"
                d="M.7 48.5L0 47.3c.2-.1 22.3-13.2 57.5-25.5C90 10.5 140.6-2.4 197.1.4l-.1 1.5C140.7-.9 90.3 11.9 58 23.2 23 35.4 1 48.4.7 48.5z"
                fill="url(#prefix__Path_2808_1_)"
            />
            </g>
            <g id="prefix__Group_2115" transform="translate(-10.73 50.814)">
            <linearGradient
                id="prefix__Path_2809_1_"
                gradientUnits="userSpaceOnUse"
                x1={-160.358}
                y1={450.925}
                x2={-159.345}
                y2={450.925}
                gradientTransform="matrix(202.5688 0 0 -54.376 32496.28 24546.7)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2809"
                d="M.9 54.4L0 53.2c.2-.1 17.2-12.9 50.5-25.8C81.3 15.5 132.6 1.1 202.5 0v1.5C132.8 2.6 81.7 16.9 51.1 28.8 17.9 41.6 1 54.3.9 54.4z"
                fill="url(#prefix__Path_2809_1_)"
            />
            </g>
            <g id="prefix__Group_2116" transform="translate(-1.952 58.909)">
            <linearGradient
                id="prefix__Path_2810_1_"
                gradientUnits="userSpaceOnUse"
                x1={-169.058}
                y1={442.049}
                x2={-168.046}
                y2={442.049}
                gradientTransform="matrix(186.4739 0 0 -47.0491 31537.51 20821.498)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2810"
                d="M.8 47L0 45.8c.2-.1 19.6-12.2 52.2-23.8C82.2 11.3 129.9-1.2 186.5.1v1.5C130.1.3 82.6 12.7 52.7 23.4 20.3 34.9 1 46.9.8 47z"
                fill="url(#prefix__Path_2810_1_)"
            />
            </g>
            <g id="prefix__Group_2117" transform="translate(-4.119 65.44)">
            <linearGradient
                id="prefix__Path_2811_1_"
                gradientUnits="userSpaceOnUse"
                x1={-166.974}
                y1={435.694}
                x2={-165.966}
                y2={435.694}
                gradientTransform="matrix(197.136 0 0 -48.5244 32923.387 21166.057)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2811"
                d="M.7 48.5L0 47.3c.2-.1 22.3-13.2 57.5-25.5C90 10.5 140.6-2.4 197.1.4l-.1 1.5C140.7-.9 90.4 11.9 58 23.2 23 35.4 1 48.4.7 48.5z"
                fill="url(#prefix__Path_2811_1_)"
            />
            </g>
            <g id="prefix__Group_2118" transform="translate(-9.277 70.444)">
            <linearGradient
                id="prefix__Path_2812_1_"
                gradientUnits="userSpaceOnUse"
                x1={-161.817}
                y1={431.295}
                x2={-160.804}
                y2={431.295}
                gradientTransform="matrix(202.571 0 0 -54.376 32790.969 23479.3)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2812"
                d="M.9 54.4L0 53.2c.2-.1 17.2-12.9 50.5-25.8C81.3 15.5 132.6 1.1 202.5 0v1.5C132.9 2.6 81.7 16.9 51.1 28.7 18 41.5 1 54.3.9 54.4z"
                fill="url(#prefix__Path_2812_1_)"
            />
            </g>
            <g id="prefix__Group_2119" transform="translate(3.137 77.814)">
            <linearGradient
                id="prefix__Path_2813_1_"
                gradientUnits="userSpaceOnUse"
                x1={-174.153}
                y1={423.143}
                x2={-173.141}
                y2={423.143}
                gradientTransform="matrix(186.4739 0 0 -47.0479 32486.477 19931.512)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2813"
                d="M.8 47L0 45.8c.2-.1 19.6-12.2 52.2-23.8C82.2 11.3 129.9-1.2 186.5.1v1.5C130.1.3 82.6 12.7 52.6 23.4 20.3 34.9 1 46.9.8 47z"
                fill="url(#prefix__Path_2813_1_)"
            />
            </g>
            <g id="prefix__Group_2120" transform="translate(.971 84.344)">
            <linearGradient
                id="prefix__Path_2814_1_"
                gradientUnits="userSpaceOnUse"
                x1={-172.066}
                y1={416.79}
                x2={-171.06}
                y2={416.79}
                gradientTransform="matrix(197.134 0 0 -48.5232 33926.469 20248.234)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2814"
                d="M.7 48.5L0 47.3c.2-.1 22.3-13.2 57.5-25.5C90 10.5 140.6-2.4 197.1.4l-.1 1.5C140.7-.9 90.3 11.9 58 23.2 22.9 35.4 1 48.4.7 48.5z"
                fill="url(#prefix__Path_2814_1_)"
            />
            </g>
            <g id="prefix__Group_2121" transform="translate(-4.187 88.62)">
            <linearGradient
                id="prefix__Path_2815_1_"
                gradientUnits="userSpaceOnUse"
                x1={-166.912}
                y1={413.119}
                x2={-165.899}
                y2={413.119}
                gradientTransform="matrix(202.571 0 0 -54.376 33822.055 22490.959)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2815"
                d="M.9 54.4L0 53.2c.2-.1 17.2-12.9 50.5-25.8C81.3 15.5 132.6 1.1 202.5 0v1.5C132.9 2.6 81.7 16.9 51.1 28.7 18 41.5 1 54.3.9 54.4z"
                fill="url(#prefix__Path_2815_1_)"
            />
            </g>
            <g id="prefix__Group_2122" transform="translate(30.727 -3.115)">
            <linearGradient
                id="prefix__Path_2816_1_"
                gradientUnits="userSpaceOnUse"
                x1={-201.588}
                y1={498.492}
                x2={-200.588}
                y2={498.492}
                gradientTransform="matrix(150.981 0 0 -23.9827 30435.916 11967.152)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2816"
                d="M.8 24L0 22.8c.4-.3 10.7-7.6 34.6-13.9C56.5 3.1 94.5-2.9 151 1.6l-.1 1.4C43.3-5.6 1.3 23.7.8 24z"
                fill="url(#prefix__Path_2816_1_)"
            />
            </g>
            <g id="prefix__Group_2123" transform="translate(26.676 1.569)">
            <linearGradient
                id="prefix__Path_2817_1_"
                gradientUnits="userSpaceOnUse"
                x1={-197.479}
                y1={495.115}
                x2={-196.475}
                y2={495.115}
                gradientTransform="matrix(150.365 0 0 -27.0952 29701.916 13428.806)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2817"
                d="M.9 27.1L0 25.9c.4-.3 10.5-7.9 34.2-14.8C56 4.7 93.8-2.3 150.4.7l-.1 1.5C42.6-3.6 1.3 26.8.9 27.1z"
                fill="url(#prefix__Path_2817_1_)"
            />
            </g>
            <g id="prefix__Group_2124" transform="translate(34.363 6.336)">
            <linearGradient
                id="prefix__Path_2818_1_"
                gradientUnits="userSpaceOnUse"
                x1={-205.224}
                y1={489.041}
                x2={-204.224}
                y2={489.041}
                gradientTransform="matrix(150.981 0 0 -23.9836 30984.883 11740.982)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2818"
                d="M.8 24L0 22.8c.4-.3 10.7-7.6 34.6-13.9C56.5 3.1 94.5-2.9 151 1.6l-.1 1.4C43.3-5.6 1.3 23.7.8 24z"
                fill="url(#prefix__Path_2818_1_)"
            />
            </g>
            <g id="prefix__Group_2125" transform="translate(30.312 11.021)">
            <linearGradient
                id="prefix__Path_2819_1_"
                gradientUnits="userSpaceOnUse"
                x1={-201.116}
                y1={485.663}
                x2={-200.112}
                y2={485.663}
                gradientTransform="matrix(150.365 0 0 -27.0938 30248.643 13171.975)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2819"
                d="M.9 27.1L0 25.9c.4-.3 10.5-7.9 34.2-14.8C56 4.7 93.8-2.3 150.4.7l-.1 1.5C94-.8 56.4 6.1 34.7 12.5 11.3 19.3 1 27 .9 27.1z"
                fill="url(#prefix__Path_2819_1_)"
            />
            </g>
            <g id="prefix__Group_2126" transform="translate(31.913 15.207)">
            <linearGradient
                id="prefix__Path_2820_1_"
                gradientUnits="userSpaceOnUse"
                x1={-202.711}
                y1={481.743}
                x2={-201.706}
                y2={481.743}
                gradientTransform="matrix(150.6338 0 0 -27.8296 30544.188 13420.633)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2820"
                d="M.7 27.8c-.2 0-.4-.1-.5-.3-.2-.3-.1-.8.2-1h.1l.1.1v-.1s.1-.1.2-.1C9.2 21.3 56.1-4 150.8.6l-.2 1.4C56.3-2.6 9.8 22.5 1.4 27.6c-.2.1-.5.2-.7.2z"
                fill="url(#prefix__Path_2820_1_)"
            />
            </g>
            <g id="prefix__Group_2127" transform="translate(-8.495 18.922)">
            <linearGradient
                id="prefix__Path_2821_1_"
                gradientUnits="userSpaceOnUse"
                x1={-162.503}
                y1={482.036}
                x2={-161.49}
                y2={482.036}
                gradientTransform="matrix(186.4739 0 0 -47.0491 30317.412 22702.85)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2821"
                d="M.8 47L0 45.8c.2-.1 19.6-12.2 52.2-23.8C82.2 11.3 129.9-1.2 186.5.1v1.5C130.1.3 82.6 12.7 52.7 23.4 20.3 34.9 1 46.9.8 47z"
                fill="url(#prefix__Path_2821_1_)"
            />
            </g>
            <g id="prefix__Group_2128" transform="translate(-10.662 24.725)">
            <linearGradient
                id="prefix__Path_2822_1_"
                gradientUnits="userSpaceOnUse"
                x1={-160.424}
                y1={476.409}
                x2={-159.417}
                y2={476.409}
                gradientTransform="matrix(197.134 0 0 -48.5237 31633.21 23141.375)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2822"
                d="M.7 48.5L0 47.3c.2-.1 22.3-13.2 57.5-25.5C90 10.5 140.6-2.4 197.1.4l-.1 1.5C140.7-.9 90.3 11.9 58 23.2 22.9 35.4 1 48.4.7 48.5z"
                fill="url(#prefix__Path_2822_1_)"
            />
            </g>
            <g id="prefix__Group_2129" transform="translate(-15.821 29.729)">
            <linearGradient
                id="prefix__Path_2823_1_"
                gradientUnits="userSpaceOnUse"
                x1={-155.261}
                y1={472.01}
                x2={-154.248}
                y2={472.01}
                gradientTransform="matrix(202.572 0 0 -54.375 31465.496 25692.752)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2823"
                d="M.9 54.4L0 53.2c.2-.1 17.2-12.9 50.5-25.8C81.3 15.5 132.6 1.1 202.5 0v1.5C132.8 2.6 81.7 16.9 51.1 28.8 17.9 41.6 1 54.3.9 54.4z"
                fill="url(#prefix__Path_2823_1_)"
            />
            </g>
            <g id="prefix__Group_2130" transform="translate(-3.405 37.098)">
            <linearGradient
                id="prefix__Path_2824_1_"
                gradientUnits="userSpaceOnUse"
                x1={-167.598}
                y1={463.86}
                x2={-166.586}
                y2={463.86}
                gradientTransform="matrix(186.4729 0 0 -47.0491 31266.398 21847.685)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2824"
                d="M.8 47L0 45.8c.2-.1 19.6-12.2 52.2-23.8C82.2 11.3 129.9-1.2 186.5.1v1.5C130.1.3 82.6 12.7 52.7 23.4 20.3 34.9 1 46.9.8 47z"
                fill="url(#prefix__Path_2824_1_)"
            />
            </g>
            <g id="prefix__Group_2131" transform="translate(-5.573 42.902)">
            <linearGradient
                id="prefix__Path_2825_1_"
                gradientUnits="userSpaceOnUse"
                x1={-165.517}
                y1={458.232}
                x2={-164.51}
                y2={458.232}
                gradientTransform="matrix(197.135 0 0 -48.5244 32636.588 22259.7)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2825"
                d="M.7 48.5L0 47.3c.2-.1 22.3-13.2 57.5-25.5C90 10.5 140.6-2.4 197.1.4l-.1 1.5C140.7-.9 90.4 11.9 58 23.2 23 35.4 1 48.4.7 48.5z"
                fill="url(#prefix__Path_2825_1_)"
            />
            </g>
            <g id="prefix__Group_2132" transform="translate(-10.73 47.906)">
            <linearGradient
                id="prefix__Path_2826_1_"
                gradientUnits="userSpaceOnUse"
                x1={-160.358}
                y1={453.834}
                x2={-159.344}
                y2={453.834}
                gradientTransform="matrix(202.5688 0 0 -54.3799 32496.28 24706.615)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2826"
                d="M.9 54.4L0 53.2l.1-.1c4.4-3.4 21.1-15.3 51.8-27C95 9.7 145.7.9 202.5 0v1.5c-56.7.9-107.2 9.7-150.1 26C22 39.1 5.4 50.9 1 54.3l-.1.1z"
                fill="url(#prefix__Path_2826_1_)"
            />
            </g>
            <g id="prefix__Group_2133" transform="translate(-1.952 55.991)">
            <linearGradient
                id="prefix__Path_2827_1_"
                gradientUnits="userSpaceOnUse"
                x1={-169.057}
                y1={444.968}
                x2={-168.045}
                y2={444.968}
                gradientTransform="matrix(186.4729 0 0 -47.0588 31537.344 20963.195)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2827"
                d="M.8 47.1L0 45.8l.2-.2c12.6-8 81-47.9 186.2-45.6v1.5C81.6-.8 13.6 38.9 1 46.9l-.2.2z"
                fill="url(#prefix__Path_2827_1_)"
            />
            </g>
            <g id="prefix__Group_2134" transform="translate(-4.119 61.805)">
            <linearGradient
                id="prefix__Path_2828_1_"
                gradientUnits="userSpaceOnUse"
                x1={-166.974}
                y1={439.329}
                x2={-165.966}
                y2={439.329}
                gradientTransform="matrix(197.136 0 0 -48.5247 32923.387 21342.55)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2828"
                d="M.7 48.5L0 47.3c.2-.1 22.3-13.2 57.5-25.5C90 10.5 140.6-2.4 197.1.4l-.1 1.5C140.7-.9 90.4 11.9 58 23.2 23 35.4 1 48.4.7 48.5z"
                fill="url(#prefix__Path_2828_1_)"
            />
            </g>
            <g id="prefix__Group_2135" transform="translate(-9.277 67.535)">
            <linearGradient
                id="prefix__Path_2829_1_"
                gradientUnits="userSpaceOnUse"
                x1={-161.816}
                y1={434.204}
                x2={-160.803}
                y2={434.204}
                gradientTransform="matrix(202.5708 0 0 -54.376 32790.93 23637.48)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2829"
                d="M.9 54.4L0 53.2c.2-.1 17.2-12.9 50.5-25.8C81.3 15.5 132.6 1.1 202.5 0v1.5C132.8 2.6 81.7 16.9 51 28.8 17.9 41.6 1 54.3.9 54.4z"
                fill="url(#prefix__Path_2829_1_)"
            />
            </g>
            <g id="prefix__Group_2136" transform="translate(3.137 74.905)">
            <linearGradient
                id="prefix__Path_2830_1_"
                gradientUnits="userSpaceOnUse"
                x1={-174.152}
                y1={426.053}
                x2={-173.14}
                y2={426.053}
                gradientTransform="matrix(186.4739 0 0 -47.0525 32486.477 20070.375)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2830"
                d="M.8 47L0 45.8c.2-.1 19.6-12.2 52.2-23.8C82.2 11.3 129.9-1.2 186.5.1v1.5C130.1.3 82.6 12.7 52.6 23.4 20.3 34.9 1 46.9.8 47z"
                fill="url(#prefix__Path_2830_1_)"
            />
            </g>
            <g id="prefix__Group_2137" transform="translate(.971 80.708)">
            <linearGradient
                id="prefix__Path_2831_1_"
                gradientUnits="userSpaceOnUse"
                x1={-172.066}
                y1={420.426}
                x2={-171.06}
                y2={420.426}
                gradientTransform="matrix(197.134 0 0 -48.5239 33926.469 20424.977)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2831"
                d="M.7 48.5L0 47.3c.2-.1 22.3-13.2 57.5-25.5C90 10.5 140.6-2.4 197.1.4l-.1 1.5C140.7-.9 90.3 11.9 58 23.2 22.9 35.4 1 48.4.7 48.5z"
                fill="url(#prefix__Path_2831_1_)"
            />
            </g>
            <g id="prefix__Group_2138" transform="translate(-4.187 85.712)">
            <linearGradient
                id="prefix__Path_2832_1_"
                gradientUnits="userSpaceOnUse"
                x1={-166.911}
                y1={416.027}
                x2={-165.898}
                y2={416.027}
                gradientTransform="matrix(202.571 0 0 -54.376 33822.055 22649.09)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2832"
                d="M.9 54.4L0 53.2c.2-.1 17.2-12.9 50.5-25.8C81.3 15.5 132.6 1.1 202.5 0v1.5C132.9 2.6 81.7 16.9 51.1 28.7 18 41.5 1 54.3.9 54.4z"
                fill="url(#prefix__Path_2832_1_)"
            />
            </g>
            <g id="prefix__Group_2139" transform="translate(8.178 94.408)">
            <linearGradient
                id="prefix__Path_2833_1_"
                gradientUnits="userSpaceOnUse"
                x1={-179.227}
                y1={406.163}
                x2={-178.218}
                y2={406.163}
                gradientTransform="matrix(187.2151 0 0 -44.1091 33560.04 17937.543)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2833"
                d="M.8 44.1L0 42.9c.2-.2 19.8-11.9 52.6-23C82.8 9.7 130.6-1.9 187.2.3l-.1 1.5C130.8-.5 83.1 11.2 53 21.3 20.4 32.3.9 44 .8 44.1z"
                fill="url(#prefix__Path_2833_1_)"
            />
            </g>
            <g id="prefix__Group_2140" transform="translate(5.878 100.957)">
            <linearGradient
                id="prefix__Path_2834_1_"
                gradientUnits="userSpaceOnUse"
                x1={-177.001}
                y1={399.807}
                x2={-175.998}
                y2={399.807}
                gradientTransform="matrix(197.8931 0 0 -45.5269 35028.824 18224.7)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2834"
                d="M.7 45.5L0 44.3c.2-.1 22.6-12.8 57.9-24.5C90.6 9 141.4-3 197.9.7l-.1 1.4C141.5-1.6 91 10.4 58.4 21.1 23.2 32.8.9 45.4.7 45.5z"
                fill="url(#prefix__Path_2834_1_)"
            />
            </g>
            <g id="prefix__Group_2141" transform="translate(.536 106.273)">
            <linearGradient
                id="prefix__Path_2835_1_"
                gradientUnits="userSpaceOnUse"
                x1={-171.664}
                y1={395.133}
                x2={-170.655}
                y2={395.133}
                gradientTransform="matrix(203.4131 0 0 -50.9861 34924.078 20171.756)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2835"
                d="M.9 51L0 49.8c.2-.1 17.4-12.6 51-25C81.8 13.5 133.3 0 203.1 0h.4v1.5h-.4c-69.5 0-120.8 13.4-151.5 24.7C18.1 38.4 1 50.9.9 51z"
                fill="url(#prefix__Path_2835_1_)"
            />
            </g>
            <g id="prefix__Group_2142" transform="translate(12.949 113.395)">
            <linearGradient
                id="prefix__Path_2836_1_"
                gradientUnits="userSpaceOnUse"
                x1={-184.002}
                y1={387.176}
                x2={-182.994}
                y2={387.176}
                gradientTransform="matrix(187.2139 0 0 -44.1077 34453.016 17099.467)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2836"
                d="M.8 44.1L0 42.9c.2-.2 19.8-11.9 52.6-23C82.8 9.7 130.6-1.9 187.2.3l-.1 1.5C130.8-.5 83.1 11.2 53 21.3 20.4 32.3.9 44 .8 44.1z"
                fill="url(#prefix__Path_2836_1_)"
            />
            </g>
            <g id="prefix__Group_2143" transform="translate(10.649 119.943)">
            <linearGradient
                id="prefix__Path_2837_1_"
                gradientUnits="userSpaceOnUse"
                x1={-181.774}
                y1={380.821}
                x2={-180.771}
                y2={380.821}
                gradientTransform="matrix(197.894 0 0 -45.5278 35973.148 17360.705)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2837"
                d="M.7 45.5L0 44.3c.2-.1 22.6-12.8 57.9-24.5C90.6 9 141.4-3 197.9.7l-.1 1.5C141.5-1.6 91 10.4 58.4 21.1 23.2 32.8.9 45.4.7 45.5z"
                fill="url(#prefix__Path_2837_1_)"
            />
            </g>
            <g id="prefix__Group_2144" transform="translate(5.321 124.532)">
            <linearGradient
                id="prefix__Path_2838_1_"
                gradientUnits="userSpaceOnUse"
                x1={-176.453}
                y1={376.874}
                x2={-175.444}
                y2={376.874}
                gradientTransform="matrix(203.4109 0 0 -50.9861 35897.023 19240.803)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2838"
                d="M.9 51L0 49.8c.2-.1 17.4-12.6 51-25C81.8 13.5 133.3 0 203.1 0h.4v1.5h-.4C133.5 1.5 82.3 15 51.5 26.3 18.1 38.5 1 50.9.9 51z"
                fill="url(#prefix__Path_2838_1_)"
            />
            </g>
            <g id="prefix__Group_2145" transform="translate(5.939 97.322)">
            <linearGradient
                id="prefix__Path_2839_1_"
                gradientUnits="userSpaceOnUse"
                x1={-177.062}
                y1={403.442}
                x2={-176.059}
                y2={403.442}
                gradientTransform="matrix(197.894 0 0 -45.5278 35041.066 18390.59)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2839"
                d="M.7 45.5L0 44.3c.2-.1 22.6-12.8 57.9-24.5C90.6 9 141.4-3 197.9.7l-.1 1.5C141.5-1.6 91 10.4 58.4 21.1 23.2 32.8.9 45.4.7 45.5z"
                fill="url(#prefix__Path_2839_1_)"
            />
            </g>
            <g id="prefix__Group_2146" transform="translate(.585 103.365)">
            <linearGradient
                id="prefix__Path_2840_1_"
                gradientUnits="userSpaceOnUse"
                x1={-171.712}
                y1={398.041}
                x2={-170.703}
                y2={398.041}
                gradientTransform="matrix(203.4131 0 0 -50.9849 34934.047 20319.533)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2840"
                d="M.9 51L0 49.8c.2-.1 17.4-12.6 51-25C81.8 13.5 133.3 0 203.1 0h.4v1.5h-.4C133.5 1.5 82.3 15 51.5 26.3 18.1 38.5 1 50.9.9 51z"
                fill="url(#prefix__Path_2840_1_)"
            />
            </g>
            <g id="prefix__Group_2147" transform="translate(12.999 110.487)">
            <linearGradient
                id="prefix__Path_2841_1_"
                gradientUnits="userSpaceOnUse"
                x1={-184.051}
                y1={390.084}
                x2={-183.043}
                y2={390.084}
                gradientTransform="matrix(187.2141 0 0 -44.1082 34462.422 17227.924)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2841"
                d="M.8 44.1L0 42.9c.2-.2 19.8-11.9 52.6-23C82.8 9.7 130.6-1.9 187.2.3l-.1 1.5C130.8-.5 83.1 11.2 53 21.3 20.4 32.3.9 44 .8 44.1z"
                fill="url(#prefix__Path_2841_1_)"
            />
            </g>
            <g id="prefix__Group_2148" transform="translate(10.71 116.309)">
            <linearGradient
                id="prefix__Path_2842_1_"
                gradientUnits="userSpaceOnUse"
                x1={-181.834}
                y1={384.455}
                x2={-180.831}
                y2={384.455}
                gradientTransform="matrix(197.8931 0 0 -45.5273 35985.043 17525.96)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2842"
                d="M.7 45.5L0 44.3c.2-.1 22.6-12.8 57.9-24.5C90.6 9 141.4-3 197.9.7l-.1 1.4C141.5-1.6 91 10.4 58.4 21.1 23.2 32.8.9 45.4.7 45.5z"
                fill="url(#prefix__Path_2842_1_)"
            />
            </g>
            <g id="prefix__Group_2149" transform="translate(5.369 121.625)">
            <linearGradient
                id="prefix__Path_2843_1_"
                gradientUnits="userSpaceOnUse"
                x1={-176.5}
                y1={379.781}
                x2={-175.491}
                y2={379.781}
                gradientTransform="matrix(203.4131 0 0 -50.9851 35907.176 19388.643)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2843"
                d="M.9 51L0 49.8c.2-.1 17.4-12.6 51-25C81.8 13.5 133.3 0 203.1 0h.4v1.5h-.4C133.5 1.5 82.3 15 51.5 26.3 18.1 38.5 1 50.9.9 51z"
                fill="url(#prefix__Path_2843_1_)"
            />
            </g>
            <g id="prefix__Group_2150" transform="translate(5.321 130.348)">
            <linearGradient
                id="prefix__Path_2844_1_"
                gradientUnits="userSpaceOnUse"
                x1={-176.454}
                y1={371.058}
                x2={-175.445}
                y2={371.058}
                gradientTransform="matrix(203.4109 0 0 -50.9861 35897.023 18944.268)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2844"
                d="M.9 51L0 49.8c.2-.1 17.4-12.6 51-25C81.8 13.5 133.3 0 203.1 0h.4v1.5h-.4C133.5 1.5 82.3 15 51.5 26.3 18.1 38.5 1 50.9.9 51z"
                fill="url(#prefix__Path_2844_1_)"
            />
            </g>
            <g id="prefix__Group_2151" transform="translate(5.369 127.44)">
            <linearGradient
                id="prefix__Path_2845_1_"
                gradientUnits="userSpaceOnUse"
                x1={-176.501}
                y1={373.966}
                x2={-175.492}
                y2={373.966}
                gradientTransform="matrix(203.4131 0 0 -50.9861 35907.176 19092.535)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2845"
                d="M.9 51L0 49.8c.2-.1 17.4-12.6 51-25C81.8 13.5 133.3 0 203.1 0h.4v1.5h-.4C133.5 1.5 82.3 15 51.5 26.3 18.1 38.5 1 50.9.9 51z"
                fill="url(#prefix__Path_2845_1_)"
            />
            </g>
            <g id="prefix__Group_2152" transform="translate(17.678 130.887)">
            <linearGradient
                id="prefix__Path_2846_1_"
                gradientUnits="userSpaceOnUse"
                x1={-188.711}
                y1={370.07}
                x2={-187.698}
                y2={370.07}
                gradientTransform="matrix(186.4729 0 0 -47.0481 35197.809 17434.629)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2846"
                d="M.8 47L0 45.8c.2-.1 19.6-12.2 52.2-23.8C82.2 11.3 129.9-1.2 186.5.1v1.5C130.1.3 82.6 12.7 52.7 23.4 20.3 34.9 1 46.9.8 47z"
                fill="url(#prefix__Path_2846_1_)"
            />
            </g>
            <g id="prefix__Group_2153" transform="translate(15.511 136.691)">
            <linearGradient
                id="prefix__Path_2847_1_"
                gradientUnits="userSpaceOnUse"
                x1={-186.615}
                y1={364.443}
                x2={-185.608}
                y2={364.443}
                gradientTransform="matrix(197.135 0 0 -48.5242 36792.984 17708.553)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2847"
                d="M.7 48.5L0 47.3c.2-.1 22.3-13.2 57.5-25.5C90 10.5 140.6-2.4 197.1.4l-.1 1.5C140.7-.9 90.3 11.9 58 23.2 22.9 35.4 1 48.4.7 48.5z"
                fill="url(#prefix__Path_2847_1_)"
            />
            </g>
            <g id="prefix__Group_2154" transform="translate(10.354 141.694)">
            <linearGradient
                id="prefix__Path_2848_1_"
                gradientUnits="userSpaceOnUse"
                x1={-181.468}
                y1={360.046}
                x2={-180.455}
                y2={360.046}
                gradientTransform="matrix(202.5708 0 0 -54.377 36767.594 19605.367)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2848"
                d="M.9 54.4L0 53.2c.2-.1 17.2-12.9 50.5-25.8C81.3 15.5 132.6 1.1 202.5 0v1.5C132.9 2.6 81.7 16.9 51.1 28.7 17.9 41.5 1 54.3.9 54.4z"
                fill="url(#prefix__Path_2848_1_)"
            />
            </g>
            <g id="prefix__Group_2155" transform="translate(22.768 149.063)">
            <linearGradient
                id="prefix__Path_2849_1_"
                gradientUnits="userSpaceOnUse"
                x1={-193.806}
                y1={351.894}
                x2={-192.794}
                y2={351.894}
                gradientTransform="matrix(186.4739 0 0 -47.0488 36147.145 16579.748)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2849"
                d="M.8 47L0 45.8c.2-.1 19.6-12.2 52.2-23.8C82.2 11.3 129.9-1.2 186.5.1v1.5C130.1.3 82.6 12.7 52.6 23.4 20.3 34.9 1 46.9.8 47z"
                fill="url(#prefix__Path_2849_1_)"
            />
            </g>
            <g id="prefix__Group_2156" transform="translate(20.6 154.866)">
            <linearGradient
                id="prefix__Path_2850_1_"
                gradientUnits="userSpaceOnUse"
                x1={-191.707}
                y1={346.268}
                x2={-190.701}
                y2={346.268}
                gradientTransform="matrix(197.136 0 0 -48.5244 37796.395 16826.713)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2850"
                d="M.7 48.5L0 47.3c.2-.1 22.3-13.2 57.5-25.5C90 10.5 140.6-2.4 197.1.4l-.1 1.5C140.7-.9 90.3 11.9 58 23.2 22.9 35.4 1 48.4.7 48.5z"
                fill="url(#prefix__Path_2850_1_)"
            />
            </g>
            <g id="prefix__Group_2157" transform="translate(15.443 160.597)">
            <linearGradient
                id="prefix__Path_2851_1_"
                gradientUnits="userSpaceOnUse"
                x1={-186.563}
                y1={341.142}
                x2={-185.549}
                y2={341.142}
                gradientTransform="matrix(202.571 0 0 -54.376 37798.523 18577.143)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2851"
                d="M.9 54.4L0 53.2c.2-.1 17.2-12.9 50.5-25.8C81.3 15.5 132.6 1.1 202.5 0v1.5C132.9 2.6 81.7 16.9 51.1 28.7 18 41.5 1 54.3.9 54.4z"
                fill="url(#prefix__Path_2851_1_)"
            />
            </g>
            <g id="prefix__Group_2158" transform="translate(32.22 166.511)">
            <linearGradient
                id="prefix__Path_2852_1_"
                gradientUnits="userSpaceOnUse"
                x1={-203.264}
                y1={334.447}
                x2={-202.251}
                y2={334.447}
                gradientTransform="matrix(186.4729 0 0 -47.0491 37909.496 15758.927)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2852"
                d="M.8 47.1L0 45.8c.2-.1 19.6-12.2 52.2-23.8C82.2 11.3 129.9-1.2 186.5.1v1.5C130.1.3 82.6 12.7 52.6 23.4 20.3 34.9 1 46.9.8 47.1z"
                fill="url(#prefix__Path_2852_1_)"
            />
            </g>
            <g id="prefix__Group_2159" transform="translate(30.052 172.315)">
            <linearGradient
                id="prefix__Path_2853_1_"
                gradientUnits="userSpaceOnUse"
                x1={-201.161}
                y1={328.819}
                x2={-200.155}
                y2={328.819}
                gradientTransform="matrix(197.135 0 0 -48.5244 39659.523 15980.01)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2853"
                d="M.7 48.5L0 47.3c.2-.1 22.3-13.2 57.5-25.5C90 10.5 140.6-2.4 197.1.4l-.1 1.5C140.7-.9 90.3 11.9 58 23.2 23 35.4 1 48.4.7 48.5z"
                fill="url(#prefix__Path_2853_1_)"
            />
            </g>
            <g id="prefix__Group_2160" transform="translate(24.895 177.32)">
            <linearGradient
                id="prefix__Path_2854_1_"
                gradientUnits="userSpaceOnUse"
                x1={-196.019}
                y1={324.419}
                x2={-195.006}
                y2={324.419}
                gradientTransform="matrix(202.5708 0 0 -54.376 39713.18 17667.818)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2854"
                d="M.9 54.4L0 53.2c.2-.1 17.2-12.9 50.5-25.8C81.3 15.5 132.6 1.1 202.5 0v1.5C132.9 2.6 81.7 16.9 51.1 28.7 17.9 41.5 1 54.3.9 54.4z"
                fill="url(#prefix__Path_2854_1_)"
            />
            </g>
            <g id="prefix__Group_2161" transform="translate(37.309 184.688)">
            <linearGradient
                id="prefix__Path_2855_1_"
                gradientUnits="userSpaceOnUse"
                x1={-208.358}
                y1={316.269}
                x2={-207.346}
                y2={316.269}
                gradientTransform="matrix(186.4729 0 0 -47.0481 38858.457 14903.398)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2855"
                d="M.8 47L0 45.8c.2-.1 19.6-12.2 52.2-23.8C82.2 11.3 129.9-1.2 186.5.1v1.5C130.1.3 82.6 12.7 52.7 23.4 20.3 34.9 1 46.9.8 47z"
                fill="url(#prefix__Path_2855_1_)"
            />
            </g>
            <g id="prefix__Group_2162" transform="translate(35.141 190.492)">
            <linearGradient
                id="prefix__Path_2856_1_"
                gradientUnits="userSpaceOnUse"
                x1={-206.254}
                y1={310.642}
                x2={-205.246}
                y2={310.642}
                gradientTransform="matrix(197.135 0 0 -48.5237 40662.742 15097.749)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2856"
                d="M.7 48.5L0 47.3c.2-.1 22.3-13.2 57.5-25.5C90 10.5 140.6-2.4 197.1.4l-.1 1.5C140.7-.9 90.4 11.9 58 23.2 23 35.4 1 48.4.7 48.5z"
                fill="url(#prefix__Path_2856_1_)"
            />
            </g>
            <g id="prefix__Group_2163" transform="translate(29.984 195.495)">
            <linearGradient
                id="prefix__Path_2857_1_"
                gradientUnits="userSpaceOnUse"
                x1={-201.114}
                y1={306.244}
                x2={-200.1}
                y2={306.244}
                gradientTransform="matrix(202.571 0 0 -54.376 40744.11 16679.531)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2857"
                d="M.9 54.4L0 53.2c.2-.1 17.2-12.9 50.5-25.8C81.3 15.5 132.6 1.1 202.5 0v1.5C132.9 2.6 81.7 16.9 51.1 28.7 17.9 41.5 1 54.3.9 54.4z"
                fill="url(#prefix__Path_2857_1_)"
            />
            </g>
            <g id="prefix__Group_2164" transform="translate(17.467 132.535)">
            <linearGradient
                id="prefix__Path_2858_1_"
                gradientUnits="userSpaceOnUse"
                x1={-188.48}
                y1={368.765}
                x2={-187.464}
                y2={368.765}
                gradientTransform="matrix(185.7009 0 0 -49.999 35012.2 18462.885)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2858"
                d="M.8 50L0 48.8c.2-.1 19.4-12.5 51.8-24.6C81.6 12.9 129.1-.3 185.7 0v1.5c-45.6-.1-90.8 8.1-133.4 24C20.1 37.6 1 49.9.8 50z"
                fill="url(#prefix__Path_2858_1_)"
            />
            </g>
            <g id="prefix__Group_2165" transform="translate(15.419 138.33)">
            <linearGradient
                id="prefix__Path_2859_1_"
                gradientUnits="userSpaceOnUse"
                x1={-186.5}
                y1={363.131}
                x2={-185.489}
                y2={363.131}
                gradientTransform="matrix(196.3411 0 0 -51.5173 36626.047 18733.291)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2859"
                d="M.8 51.5L0 50.3c.2-.1 22.1-13.6 57.1-26.4C89.4 12 139.7-1.7 196.3.2v1.5C139.9-.2 89.8 13.5 57.6 25.2 22.8 38 1 51.4.8 51.5z"
                fill="url(#prefix__Path_2859_1_)"
            />
            </g>
            <g id="prefix__Group_2166" transform="translate(10.442 143.116)">
            <linearGradient
                id="prefix__Path_2860_1_"
                gradientUnits="userSpaceOnUse"
                x1={-181.54}
                y1={358.91}
                x2={-180.522}
                y2={358.91}
                gradientTransform="matrix(201.7012 0 0 -57.6721 36626.766 20727.957)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2860"
                d="M.9 57.7L0 56.5c.2-.1 17-13.2 50.1-26.6C80.6 17.5 131.7 2.3 201.7 0v1.5C132 3.7 81.1 18.9 50.7 31.2 17.8 44.6 1.1 57.5.9 57.7z"
                fill="url(#prefix__Path_2860_1_)"
            />
            </g>
            <g id="prefix__Group_2167" transform="translate(22.854 150.626)">
            <linearGradient
                id="prefix__Path_2861_1_"
                gradientUnits="userSpaceOnUse"
                x1={-193.875}
                y1={350.674}
                x2={-192.858}
                y2={350.674}
                gradientTransform="matrix(185.7 0 0 -49.9971 36012.379 17557.656)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2861"
                d="M.8 50L0 48.8c.2-.1 19.4-12.5 51.8-24.6C81.6 12.9 129.1-.3 185.7 0v1.5C129.3 1.1 82 14.3 52.3 25.5 20.1 37.6 1 49.9.8 50z"
                fill="url(#prefix__Path_2861_1_)"
            />
            </g>
            <g id="prefix__Group_2168" transform="translate(20.127 159.556)">
            <linearGradient
                id="prefix__Path_2862_1_"
                gradientUnits="userSpaceOnUse"
                x1={-191.249}
                y1={341.305}
                x2={-190.245}
                y2={341.305}
                gradientTransform="matrix(197.7061 0 0 -46.2803 37812.672 15818.837)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2862"
                d="M.7 46.3L0 45c.2-.1 22.5-12.9 57.8-24.7C90.4 9.4 141.2-2.9 197.7.6l-.1 1.4C141.3-1.4 90.8 10.8 58.3 21.7 23.1 33.4.9 46.2.7 46.3z"
                fill="url(#prefix__Path_2862_1_)"
            />
            </g>
            <g id="prefix__Group_2169" transform="translate(15.827 161.933)">
            <linearGradient
                id="prefix__Path_2863_1_"
                gradientUnits="userSpaceOnUse"
                x1={-186.932}
                y1={340.093}
                x2={-185.914}
                y2={340.093}
                gradientTransform="matrix(201.6992 0 0 -57.6721 37712.559 19642.74)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2863"
                d="M.9 57.7L0 56.5c.2-.1 17-13.2 50.1-26.6C80.6 17.5 131.7 2.3 201.7 0v1.5C132 3.7 81.1 18.9 50.6 31.2 17.7 44.6 1.1 57.5.9 57.7z"
                fill="url(#prefix__Path_2863_1_)"
            />
            </g>
            <g id="prefix__Group_2170" transform="translate(32.59 167.918)">
            <linearGradient
                id="prefix__Path_2864_1_"
                gradientUnits="userSpaceOnUse"
                x1={-203.618}
                y1={333.382}
                x2={-202.601}
                y2={333.382}
                gradientTransform="matrix(185.699 0 0 -49.998 37820.152 16693.438)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2864"
                d="M.8 50L0 48.8c.2-.1 19.4-12.5 51.8-24.6C93.9 8.3 138.5.2 183.6 0h2.1v1.5c-45.5-.1-90.7 8-133.4 24C20.1 37.6 1 49.9.8 50z"
                fill="url(#prefix__Path_2864_1_)"
            />
            </g>
            <g id="prefix__Group_2171" transform="translate(30.541 173.712)">
            <linearGradient
                id="prefix__Path_2865_1_"
                gradientUnits="userSpaceOnUse"
                x1={-201.631}
                y1={327.749}
                x2={-200.62}
                y2={327.749}
                gradientTransform="matrix(196.3401 0 0 -51.519 39594.918 16911.072)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2865"
                d="M.8 51.5L0 50.3c.2-.1 22.1-13.6 57.1-26.4C89.4 12 139.7-1.7 196.3.2v1.5C139.9-.2 89.8 13.4 57.6 25.2 22.8 38 1 51.4.8 51.5z"
                fill="url(#prefix__Path_2865_1_)"
            />
            </g>
            <g id="prefix__Group_2172" transform="translate(25.564 178.498)">
            <linearGradient
                id="prefix__Path_2866_1_"
                gradientUnits="userSpaceOnUse"
                x1={-196.675}
                y1={323.528}
                x2={-195.657}
                y2={323.528}
                gradientTransform="matrix(201.7002 0 0 -57.6721 39676.7 18687.4)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2866"
                d="M.9 57.7L0 56.5c.2-.1 17-13.2 50.1-26.6C80.6 17.5 131.7 2.3 201.7 0v1.5C132 3.7 81.1 18.9 50.7 31.2 17.8 44.6 1.1 57.5.9 57.7z"
                fill="url(#prefix__Path_2866_1_)"
            />
            </g>
            <g id="prefix__Group_2173" transform="translate(37.559 186.009)">
            <linearGradient
                id="prefix__Path_2867_1_"
                gradientUnits="userSpaceOnUse"
                x1={-208.596}
                y1={315.31}
                x2={-207.579}
                y2={315.31}
                gradientTransform="matrix(186.1165 0 0 -50.1704 38830.379 15844.294)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2867"
                d="M.7 50.2c-.2 0-.4-.1-.6-.3-.2-.3-.1-.8.2-1h.1c.1 0 .2-.1.3-.2C14.9 40.4 90.4-.6 186.1 0v1.5h-2C89.7 1.5 15.4 41.7 1.4 49.9c0 0-.1.1-.2.1-.2.1-.4.2-.5.2z"
                fill="url(#prefix__Path_2867_1_)"
            />
            </g>
            <g id="prefix__Group_2174" transform="translate(35.927 191.802)">
            <linearGradient
                id="prefix__Path_2868_1_"
                gradientUnits="userSpaceOnUse"
                x1={-207.021}
                y1={309.659}
                x2={-206.01}
                y2={309.659}
                gradientTransform="matrix(196.3411 0 0 -51.5154 40652.61 15977.941)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2868"
                d="M.8 51.5L0 50.3c.2-.1 22.1-13.6 57.1-26.4C89.4 12.1 139.7-1.7 196.3.2v1.5C139.9-.2 89.8 13.5 57.6 25.2 22.8 38 1 51.4.8 51.5z"
                fill="url(#prefix__Path_2868_1_)"
            />
            </g>
            <g id="prefix__Group_2175" transform="translate(30.95 196.588)">
            <linearGradient
                id="prefix__Path_2869_1_"
                gradientUnits="userSpaceOnUse"
                x1={-202.068}
                y1={305.438}
                x2={-201.05}
                y2={305.438}
                gradientTransform="matrix(201.7002 0 0 -57.6721 40763.055 17644.113)"
            >
                <stop offset={0} stopColor="#9bd0e5" />
                <stop offset={1} stopColor="#97baea" />
            </linearGradient>
            <path
                id="prefix__Path_2869"
                d="M.9 57.7L0 56.5c.2-.1 17-13.2 50.1-26.6C80.6 17.5 131.7 2.3 201.7 0v1.5C132 3.7 81.1 18.9 50.7 31.2 17.8 44.6 1.1 57.5.9 57.7z"
                fill="url(#prefix__Path_2869_1_)"
            />
            </g>
        </g>
        </g>
        <path
        id="prefix__Path_2871"
        className="prefix__st74"
        d="M188.4.5c-5.1 1.3-16.6 11.6-10 18.5 4.8 4.9 7-5.5 16.6-7.8 14.5-3.6 3.7-13.5-6.6-10.7z"
        />
        <path
        id="prefix__Path_2872"
        className="prefix__st74"
        d="M196.9 20.8c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8s3.8-1.7 3.8-3.8z"
        />
        <linearGradient
        id="prefix__Path_2873_1_"
        gradientUnits="userSpaceOnUse"
        x1={-114.648}
        y1={429.057}
        x2={-112.3}
        y2={432.02}
        gradientTransform="matrix(3.0403 0 0 -3.0403 467.962 1308.202)"
        >
        <stop offset={0} stopColor="#b0e4f7" />
        <stop offset={1} stopColor="#9dd7e9" />
        </linearGradient>
        <path
        id="prefix__Path_2873"
        d="M120.1 4.8c0-.8-.7-1.5-1.5-1.5S117 4 117 4.8s.7 1.5 1.5 1.5c.9 0 1.6-.6 1.6-1.5z"
        fill="url(#prefix__Path_2873_1_)"
        />
        <g id="prefix__Group_2178" transform="translate(190.951 12.099)">
        <path
            id="prefix__Path_2874"
            className="prefix__st74"
            d="M3.4 61.3c-1.9 0-3.4-1.5-3.4-3.4 0-.8.3-1.7.9-2.3L49.7 1.1C51-.3 53.1-.4 54.5.9s1.5 3.4.3 4.8L6 60.1c-.7.8-1.6 1.2-2.6 1.2z"
        />
        </g>
        <g id="prefix__Group_2179" transform="translate(235.181 12.14)">
        <path
            id="prefix__Path_2875"
            className="prefix__st74"
            d="M1.9 35.1c-1 0-1.9-.8-1.9-1.9 0-.5.2-.9.5-1.3L28.5.6c.7-.8 1.9-.8 2.7-.1s.8 1.9.1 2.7l-28 31.3c-.3.4-.9.6-1.4.6z"
        />
        </g>
        <g id="prefix__Group_2182" transform="translate(67.998 .011)">
        <g id="prefix__Group_2180" transform="translate(0 4.553)">
            <path
            id="prefix__Path_2876"
            className="prefix__st74"
            d="M1.1 4.8C.5 4.8 0 4.3 0 3.7c0-.5.4-1 .9-1.1L12.5 0c.6-.1 1.2.3 1.4.9.1.6-.3 1.2-.9 1.4L1.4 4.8h-.3z"
            />
        </g>
        <g id="prefix__Group_2181" transform="translate(4.552)">
            <path
            id="prefix__Path_2877"
            className="prefix__st74"
            d="M3.7 13.9c-.5 0-1-.4-1.1-.9L0 1.4C-.1.8.2.2.9 0c.6-.2 1.2.2 1.4.8v.1l2.5 11.6c.1.6-.3 1.2-.9 1.4h-.2z"
            />
        </g>
        </g>
        <g id="prefix__Group_2185" transform="translate(225.76 178.482)">
        <g id="prefix__Group_2183" transform="translate(.134)">
            <image
            width={40}
            height={42}
            id="prefix__Rectangle_388"
            xlinkHref="19909EBB612C3C1.png"
            transform="translate(.657 .757) scale(.1261)"
            overflow="visible"
            />
            <path
            id="prefix__Path_2878"
            className="prefix__st74"
            d="M.8 6.7C.3 6.7 0 6.4 0 6c0-.2.1-.4.2-.5L5.1.3c.3-.3.8-.4 1.1-.1.3.3.4.8.1 1.1l-.1.1-4.9 5.1c-.1.1-.3.2-.5.2z"
            />
        </g>
        <g id="prefix__Group_2184" transform="translate(0 .135)">
            <path
            id="prefix__Path_2879"
            className="prefix__st74"
            d="M6 6.5c-.2 0-.4-.1-.5-.2l-5.3-5C-.1 1-.1.6.1.2.4-.1.8-.2 1.2.1l.1.1 5.2 4.9c.3.3.3.8 0 1.1-.1.2-.3.3-.5.3z"
            />
        </g>
        </g>
        <linearGradient
        id="prefix__Path_2880_1_"
        gradientUnits="userSpaceOnUse"
        x1={-171.612}
        y1={517.044}
        x2={-170.618}
        y2={517.044}
        gradientTransform="matrix(207.6082 0 0 -187.5083 35560.7 97059.203)"
        >
        <stop offset={0} stopColor="#6eaac1" />
        <stop offset={1} stopColor="#9dd7e9" />
        </linearGradient>
        <path
        id="prefix__Path_2880"
        className="faze_one_animate"
        d="M226.9 100.4c10.4-22.3 4.7-56.4-23.3-68.5-38.1-16.4-52.7 12-93.7-8-47.5-23.1-75.7 4.9-84 36.9-6.2 24.1 2.4 60.5 38.7 77.6 63.8 30 53.8 63.1 91 64.4 55.6 2 46.1-48.3 71.3-102.4z"
        fill="url(#prefix__Path_2880_1_)"
        />
        <ellipse
        id="prefix__Ellipse_69"
        className="prefix__st74"
        cx={94.4}
        cy={236.7}
        rx={6.4}
        ry={6.4}
        />
        <path
        id="prefix__Path_2881"
        className="prefix__st74"
        d="M122 228.3c0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4 2.4 0 4.4 2 4.4 4.4z"
        />
    </svg>
)

const FazeTwoSvg = props => (
    <svg
    id="prefix__Layer_1"
    x={0}
    y={0}
    viewBox="0 0 267 197.4"
    xmlSpace="preserve"
    {...props}
  >
    <style>{`.prefix__st1{fill:${props.color}}.prefix__st3{fill:${props.color2}}`}</style>
    <g id="prefix__Group_2104" transform="translate(-2127.182 -2531.812)">
      <g
        id="prefix__Group_2055"
        transform="translate(2127.182 2531.812)"
        opacity={0.48}
      >
        <path
          id="prefix__Path_1404"
          className="prefix__st1"
          d="M37.9 29.8c0-1.7.1-3.4.4-5.1.2-1.7.6-3.3 1.1-5 1-3.3 2.5-6.4 4.5-9.1 2.1-2.8 4.7-5.1 7.7-6.7.7-.5 1.5-.8 2.3-1.2.8-.3 1.6-.7 2.4-.9.8-.3 1.6-.5 2.5-.7.4 0 .8-.1 1.2-.2l1.3-.2c3.4-.5 6.8-.8 10.2-.6 3.4.1 6.8.7 10.1 1.7s6.4 2.4 9.3 4.3c2.9 1.9 5.5 4.1 7.9 6.6 2.3 2.5 4.4 5.2 6.3 8.1 1.9 2.9 3.5 5.8 5 8.9 2.9 6.1 5.4 12.5 7.4 19 .5 1.6 1 3.3 1.4 4.9.5 1.6.9 3.3 1.3 4.9l1.2 4.9.6 2.4.8 2.3c1.7 4.6 4.7 8.6 8.6 11.6 1.3 1 2.7 1.8 4.2 2.6 5.8 3 12.5 4.4 19.1 5 6.7.5 13.4.5 20.1 0 6.7-.4 13.4-1.2 20.1-1.9 6.7-.8 13.4-1.7 20.1-2.5s13.4-1.4 20.2-1.6c3.4-.1 6.8 0 10.1.3 3.4.3 6.7 1.1 9.9 2.3 1.6.6 3.1 1.5 4.5 2.5 1.4 1.1 2.6 2.3 3.5 3.8.9 1.4 1.7 3 2.3 4.6.5 1.6.9 3.3 1.2 5 .9 6.8-.1 13.7-2 20.2s-4.7 12.8-8.2 18.6c-3.5 5.9-7.6 11.3-12.4 16.2-4.7 4.9-10.1 9.2-15.9 12.8-2.9 1.8-5.9 3.4-9.1 4.8-3.1 1.4-6.4 2.5-9.6 3.4-3.3.9-6.6 1.6-10 2-3.4.5-6.8.6-10.2.6H188l-1.3-.1c-.9-.1-1.7-.1-2.6-.1-1.7-.2-3.4-.3-5.1-.6-1.7-.2-3.4-.6-5-.9-.8-.2-1.7-.4-2.5-.6s-1.7-.4-2.5-.6c-6.6-1.8-13-4.2-19-7.3-3-1.5-6-3.2-8.9-4.9l-4.3-2.6c-.7-.4-1.5-.9-2.2-1.3l-2.1-1.4-4.3-2.8c-1.4-.9-2.8-1.9-4.2-2.9-1.4-1-2.8-1.9-4.1-2.9l-4.1-3c-1.4-1-2.7-2.1-4-3.1s-2.7-2.1-3.9-3.2c-2.6-2.2-5.1-4.4-7.6-6.8-2.5-2.3-4.9-4.7-7.2-7.1l-3.4-3.7c-.6-.6-1.1-1.3-1.7-1.9l-1.7-1.9c-4.4-5.2-8.5-10.6-12.2-16.3-7.5-11.3-13.2-23.7-18.4-36.1-2.6-6.2-5-12.5-7.8-18.7-1.4-3.1-2.8-6.1-4.5-9-1.7-3.2-3.5-6-5.5-8.8zm.2 0c2.1 2.7 3.9 5.5 5.6 8.4 1.7 2.9 3.2 5.9 4.7 9 2.9 6.1 5.5 12.3 8.2 18.5S62.1 78 65.1 84c3.1 6 6.5 11.8 10.2 17.3 3.7 5.6 7.8 10.9 12.2 16l1.7 1.9c.5.6 1.1 1.3 1.7 1.9l3.4 3.7c2.4 2.4 4.7 4.8 7.2 7 9.9 9 20.6 17.2 32 24.4l2.1 1.4c.7.5 1.4.9 2.2 1.3l4.3 2.6c2.9 1.7 5.8 3.3 8.8 4.8 6 3 12.2 5.4 18.6 7.2l2.4.6 2.4.6c1.6.3 3.3.7 4.9.9 1.6.3 3.3.4 4.9.6.8.1 1.7.1 2.5.2l1.2.1h1.2c3.3.1 6.6-.1 9.9-.5 3.3-.4 6.6-1 9.8-1.9 3.2-.9 6.3-2 9.4-3.3 3-1.3 6-2.9 8.9-4.6 5.7-3.5 11-7.6 15.6-12.4 4.7-4.8 8.8-10 12.4-15.7 3.5-5.7 6.3-11.8 8.3-18.2 1.9-6.4 3-13.1 2.2-19.7-.2-1.6-.6-3.3-1.1-4.8-.5-1.6-1.3-3.1-2.1-4.5-.9-1.4-2-2.6-3.3-3.6-1.3-1-2.7-1.8-4.3-2.5-3.1-1.2-6.4-2-9.7-2.3-3.3-.3-6.7-.5-10.1-.4-6.7.1-13.4.9-20.1 1.7-6.7.8-13.4 1.8-20 2.6-6.7.9-13.4 1.7-20.1 2.3-6.8.6-13.5.7-20.3.3-6.8-.5-13.6-1.7-19.8-4.9-1.5-.8-3-1.7-4.4-2.7-4.2-3.2-7.4-7.5-9.3-12.4-.3-.8-.6-1.6-.8-2.5l-.7-2.5-1.2-4.9-1.3-4.9c-.5-1.6-.9-3.2-1.4-4.8-1.9-6.4-4.3-12.7-7.1-18.7-1.4-3-3.1-5.9-4.9-8.7-1.8-2.8-3.8-5.4-6.1-7.9-2.3-2.4-4.8-4.6-7.5-6.4C87.3 5.5 84.3 4 81.2 3c-3.2-1-6.4-1.6-9.8-1.7-3.3-.2-6.7 0-10 .5-3.3.4-6.5 1.5-9.4 3-2.9 1.6-5.5 3.7-7.6 6.3-2 2.6-3.6 5.6-4.6 8.8-1 3.2-1.6 6.5-1.7 9.9z"
        />
        <g transform="translate(89.274 106.09)" id="prefix__Group_2039">
          <defs>
            <path
              id="prefix__SVGID_1_"
              d="M150.7 19.6C149.3 8.1 133.7-.2 113.4 3c-36 5.6-40.7-15.2-62.7 9C32 32.7 25.2 22.8 10.2 38.6c-8.8 9.3-14.6 24.8-6 39.5s38.2 20.4 55.5 0c22.5-26.5 54.2-16.8 76.2-28.2 17-8.8 15.9-20.8 14.8-30.3z"
            />
          </defs>
          <clipPath id="prefix__SVGID_2_">
            <use xlinkHref="#prefix__SVGID_1_" overflow="visible" />
          </clipPath>
          <g id="prefix__Group_2038" clipPath="url(#prefix__SVGID_2_)">
            <g id="prefix__Group_2037" transform="translate(-66.21 -7.151)">
              <g id="prefix__Group_2017">
                <path
                  id="prefix__Rectangle_324"
                  transform="rotate(-2.588 145.706 7.529) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2018" transform="translate(0 4.527)">
                <path
                  id="prefix__Rectangle_325"
                  transform="rotate(-2.588 145.707 7.53) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2019" transform="translate(0 9.581)">
                <path
                  id="prefix__Rectangle_326"
                  transform="rotate(-2.588 145.707 7.53) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2020" transform="translate(0 14.105)">
                <path
                  id="prefix__Rectangle_327"
                  transform="rotate(-2.588 145.707 7.53) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2021" transform="translate(0 18.443)">
                <path
                  id="prefix__Rectangle_328"
                  transform="rotate(-2.588 145.707 7.53) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2022" transform="translate(0 22.97)">
                <path
                  id="prefix__Rectangle_329"
                  transform="rotate(-2.588 145.705 7.53) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2023" transform="translate(0 28.022)">
                <path
                  id="prefix__Rectangle_330"
                  transform="rotate(-2.588 145.707 7.53) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2024" transform="translate(0 32.549)">
                <path
                  id="prefix__Rectangle_331"
                  transform="rotate(-2.588 145.705 7.53) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2025" transform="translate(0 37.157)">
                <path
                  id="prefix__Rectangle_332"
                  transform="rotate(-2.588 145.706 7.529) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2026" transform="translate(0 41.685)">
                <path
                  id="prefix__Rectangle_333"
                  transform="matrix(.999 -.045 .045 .999 -.192 6.564)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2027" transform="translate(0 46.736)">
                <path
                  id="prefix__Rectangle_334"
                  transform="rotate(-2.588 145.706 7.527) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2028" transform="translate(0 51.262)">
                <path
                  id="prefix__Rectangle_335"
                  transform="rotate(-2.588 145.707 7.53) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2029" transform="translate(0 55.598)">
                <path
                  id="prefix__Rectangle_336"
                  transform="rotate(-2.588 145.706 7.529) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2030" transform="translate(0 60.125)">
                <path
                  id="prefix__Rectangle_337"
                  transform="rotate(-2.588 145.707 7.53) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2031" transform="translate(0 65.179)">
                <path
                  id="prefix__Rectangle_338"
                  transform="rotate(-2.588 145.707 7.53) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2032" transform="translate(0 69.706)">
                <path
                  id="prefix__Rectangle_339"
                  transform="rotate(-2.588 145.705 7.53) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2033" transform="translate(0 74.642)">
                <path
                  id="prefix__Rectangle_340"
                  transform="rotate(-2.588 145.706 7.527) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2034" transform="translate(0 79.697)">
                <path
                  id="prefix__Rectangle_341"
                  transform="rotate(-2.588 145.707 7.53) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2035" transform="translate(0 84.222)">
                <path
                  id="prefix__Rectangle_342"
                  transform="rotate(-2.588 145.707 7.53) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
              <g id="prefix__Group_2036" transform="translate(0 88.641)">
                <path
                  id="prefix__Rectangle_343"
                  transform="rotate(-2.588 145.707 7.53) scale(1.00002)"
                  className="prefix__st3"
                  d="M-.1 6.6h291.6v1.9H-.1z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="prefix__Group_2040" transform="translate(99.127 92.453)">
          <path
            id="prefix__Path_1406"
            d="M19.6 1.3C15.4 2.5 4.7 5.1 1.2 11.7c-4.6 8.7 5.2 21.1 17 18.8s23-10 23.3-16.7c.2-4.2-3.6-18-21.9-12.5z"
            fill="#fff"
            fillOpacity={0}
          />
          <linearGradient
            id="prefix__Path_1407_1_"
            gradientUnits="userSpaceOnUse"
            x1={-267.611}
            y1={391.978}
            x2={-263.917}
            y2={395.959}
            gradientTransform="matrix(40.7947 0 0 -30.2078 10888.797 11894.528)"
          >
            <stop offset={0} stopColor="#fffbf8" />
            <stop offset={1} stopColor="#fffbf8" />
          </linearGradient>
          <path
            id="prefix__Path_1407"
            d="M19.5 1.5C15.4 2.8 4.8 5.3 1.4 11.7c-4.6 8.6 5.1 20.7 16.7 18.5S40.7 20.4 41 13.8c.3-4.2-3.4-17.7-21.5-12.3z"
            opacity={0.026}
            fill="url(#prefix__Path_1407_1_)"
          />
          <linearGradient
            id="prefix__Path_1408_1_"
            gradientUnits="userSpaceOnUse"
            x1={-267.539}
            y1={391.789}
            x2={-263.844}
            y2={395.779}
            gradientTransform="matrix(40.1077 0 0 -29.646 10702.79 11668.103)"
          >
            <stop offset={0} stopColor="#fff7f2" />
            <stop offset={1} stopColor="#fff6f2" />
          </linearGradient>
          <path
            id="prefix__Path_1408"
            d="M19.4 1.8C15.4 3 5 5.4 1.7 11.8c-4.5 8.5 5 20.3 16.4 18.2s22.2-9.6 22.6-16.2c.1-4.1-3.4-17.3-21.3-12z"
            opacity={0.051}
            fill="url(#prefix__Path_1408_1_)"
          />
          <linearGradient
            id="prefix__Path_1409_1_"
            gradientUnits="userSpaceOnUse"
            x1={-267.466}
            y1={391.593}
            x2={-263.769}
            y2={395.592}
            gradientTransform="matrix(39.425 0 0 -29.0815 10517.974 11440.596)"
          >
            <stop offset={0} stopColor="#fff4eb" />
            <stop offset={1} stopColor="#fff2eb" />
          </linearGradient>
          <path
            id="prefix__Path_1409"
            d="M19.4 2.1c-4 1.1-14.2 3.4-17.5 9.7-4.4 8.4 4.9 20 16.1 17.8s21.8-9.5 22.2-15.9c.2-3.9-3.3-16.9-20.8-11.6z"
            opacity={0.077}
            fill="url(#prefix__Path_1409_1_)"
          />
          <linearGradient
            id="prefix__Path_1410_1_"
            gradientUnits="userSpaceOnUse"
            x1={-267.388}
            y1={391.389}
            x2={-263.691}
            y2={395.397}
            gradientTransform="matrix(38.7405 0 0 -28.5168 10332.626 11212.99)"
          >
            <stop offset={0} stopColor="#fff0e5" />
            <stop offset={1} stopColor="#ffeee5" />
          </linearGradient>
          <path
            id="prefix__Path_1410"
            d="M19.3 2.3C15.4 3.5 5.4 5.7 2.2 11.9-2.2 20.1 6.9 31.5 18 29.4s21.4-9.3 21.8-15.6c.2-4-3.2-16.7-20.5-11.5z"
            opacity={0.103}
            fill="url(#prefix__Path_1410_1_)"
          />
          <linearGradient
            id="prefix__Path_1411_1_"
            gradientUnits="userSpaceOnUse"
            x1={-267.31}
            y1={391.177}
            x2={-263.611}
            y2={395.195}
            gradientTransform="matrix(38.0623 0 0 -27.9529 10148.999 10985.679)"
          >
            <stop offset={0} stopColor="#ffecde" />
            <stop offset={1} stopColor="#ffeade" />
          </linearGradient>
          <path
            id="prefix__Path_1411"
            d="M19.2 2.6C15.4 3.7 5.6 5.8 2.4 11.9-1.9 20 7 31.1 17.9 29.1S39 20 39.3 13.8c.3-3.9-3-16.3-20.1-11.2z"
            opacity={0.128}
            fill="url(#prefix__Path_1411_1_)"
          />
          <linearGradient
            id="prefix__Path_1412_1_"
            gradientUnits="userSpaceOnUse"
            x1={-267.227}
            y1={390.956}
            x2={-263.528}
            y2={394.984}
            gradientTransform="matrix(37.373 0 0 -27.3906 9962.397 10759.06)"
          >
            <stop offset={0} stopColor="#ffe8d8" />
            <stop offset={1} stopColor="#ffe5d8" />
          </linearGradient>
          <path
            id="prefix__Path_1412"
            d="M19.2 2.9C15.4 4 5.8 6 2.6 12c-4.2 8 4.5 18.9 15.3 16.8s20.7-8.9 21-15c.2-3.8-3-16-19.7-10.9z"
            opacity={0.154}
            fill="url(#prefix__Path_1412_1_)"
          />
          <linearGradient
            id="prefix__Path_1413_1_"
            gradientUnits="userSpaceOnUse"
            x1={-267.141}
            y1={390.725}
            x2={-263.441}
            y2={394.764}
            gradientTransform="matrix(36.6885 0 0 -26.824 9777.05 10530.665)"
          >
            <stop offset={0} stopColor="#ffe4d1" />
            <stop offset={1} stopColor="#fee1d1" />
          </linearGradient>
          <path
            id="prefix__Path_1413"
            d="M19.1 3.1C15.4 4.2 6 6.1 2.9 12c-4.2 7.8 4.4 18.5 15 16.5s20.3-8.7 20.6-14.7c.2-3.8-2.9-15.6-19.4-10.7z"
            opacity={0.179}
            fill="url(#prefix__Path_1413_1_)"
          />
          <linearGradient
            id="prefix__Path_1414_1_"
            gradientUnits="userSpaceOnUse"
            x1={-267.053}
            y1={390.485}
            x2={-263.351}
            y2={394.535}
            gradientTransform="matrix(36.0054 0 0 -26.2605 9592.103 10303.55)"
          >
            <stop offset={0} stopColor="#ffe1cb" />
            <stop offset={1} stopColor="#feddcb" />
          </linearGradient>
          <path
            id="prefix__Path_1414"
            d="M19.1 3.4C15.4 4.5 6.2 6.3 3.1 12-1 19.8 7.4 30.2 17.8 28.2S37.7 19.7 38 13.8c.3-3.7-2.7-15.3-18.9-10.4z"
            opacity={0.205}
            fill="url(#prefix__Path_1414_1_)"
          />
          <linearGradient
            id="prefix__Path_1415_1_"
            gradientUnits="userSpaceOnUse"
            x1={-266.96}
            y1={390.234}
            x2={-263.257}
            y2={394.296}
            gradientTransform="matrix(35.3198 0 0 -25.6963 9406.49 10076.142)"
          >
            <stop offset={0} stopColor="#ffddc4" />
            <stop offset={1} stopColor="#fed8c4" />
          </linearGradient>
          <path
            id="prefix__Path_1415"
            d="M19 3.6C15.4 4.7 6.4 6.4 3.4 12.1c-4 7.6 4.2 17.8 14.4 15.8s19.5-8.3 19.9-14.1C37.8 10.2 35-1.1 19 3.6z"
            opacity={0.231}
            fill="url(#prefix__Path_1415_1_)"
          />
          <linearGradient
            id="prefix__Path_1416_1_"
            gradientUnits="userSpaceOnUse"
            x1={-266.865}
            y1={389.972}
            x2={-263.16}
            y2={394.046}
            gradientTransform="matrix(34.6355 0 0 -25.1328 9221.21 9849.026)"
          >
            <stop offset={0} stopColor="#ffd9be" />
            <stop offset={1} stopColor="#fed4be" />
          </linearGradient>
          <path
            id="prefix__Path_1416"
            d="M18.9 3.9C15.4 5 6.6 6.5 3.6 12.1c-4 7.5 4.1 17.4 14.1 15.5s19.1-8.1 19.5-13.9c.2-3.5-2.6-14.5-18.3-9.8z"
            opacity={0.256}
            fill="url(#prefix__Path_1416_1_)"
          />
          <linearGradient
            id="prefix__Path_1417_1_"
            gradientUnits="userSpaceOnUse"
            x1={-266.765}
            y1={389.698}
            x2={-263.06}
            y2={393.785}
            gradientTransform="matrix(33.9512 0 0 -24.5686 9035.93 9621.617)"
          >
            <stop offset={0} stopColor="#ffd5b7" />
            <stop offset={1} stopColor="#fed0b7" />
          </linearGradient>
          <path
            id="prefix__Path_1417"
            d="M18.9 4.2c-3.5 1-12.1 2.5-15 8-3.9 7.3 4 17.1 13.8 15.2s18.8-7.9 19.1-13.6c.2-3.5-2.5-14.3-17.9-9.6z"
            opacity={0.282}
            fill="url(#prefix__Path_1417_1_)"
          />
          <linearGradient
            id="prefix__Path_1418_1_"
            gradientUnits="userSpaceOnUse"
            x1={-266.661}
            y1={389.412}
            x2={-262.955}
            y2={393.512}
            gradientTransform="matrix(33.2671 0 0 -24.0063 8850.719 9394.997)"
          >
            <stop offset={0} stopColor="#ffd1b1" />
            <stop offset={1} stopColor="#feccb1" />
          </linearGradient>
          <path
            id="prefix__Path_1418"
            d="M18.8 4.4C15.4 5.5 7 6.8 4.1 12.2.3 19.4 8 28.9 17.7 27.1s18.4-7.8 18.7-13.3c.2-3.5-2.4-13.9-17.6-9.4z"
            opacity={0.308}
            fill="url(#prefix__Path_1418_1_)"
          />
          <linearGradient
            id="prefix__Path_1419_1_"
            gradientUnits="userSpaceOnUse"
            x1={-266.553}
            y1={389.111}
            x2={-262.845}
            y2={393.225}
            gradientTransform="matrix(32.5845 0 0 -23.4412 8665.896 9167.191)"
          >
            <stop offset={0} stopColor="#ffceaa" />
            <stop offset={1} stopColor="#fec7aa" />
          </linearGradient>
          <path
            id="prefix__Path_1419"
            d="M18.8 4.7C15.4 5.7 7.2 7 4.4 12.3.6 19.4 8.1 28.6 17.7 26.8s18-7.6 18.3-13c.1-3.4-2.4-13.6-17.2-9.1z"
            opacity={0.333}
            fill="url(#prefix__Path_1419_1_)"
          />
          <linearGradient
            id="prefix__Path_1420_1_"
            gradientUnits="userSpaceOnUse"
            x1={-266.441}
            y1={388.796}
            x2={-262.732}
            y2={392.924}
            gradientTransform="matrix(31.9036 0 0 -22.8787 8481.544 8940.472)"
          >
            <stop offset={0} stopColor="#ffcaa3" />
            <stop offset={1} stopColor="#fec3a3" />
          </linearGradient>
          <path
            id="prefix__Path_1420"
            d="M18.7 5C15.4 6 7.4 7.2 4.6 12.4c-3.7 6.9 3.6 16 13 14.2s17.6-7.4 17.9-12.7C35.7 10.5 33.3.6 18.7 5z"
            opacity={0.359}
            fill="url(#prefix__Path_1420_1_)"
          />
          <linearGradient
            id="prefix__Path_1421_1_"
            gradientUnits="userSpaceOnUse"
            x1={-266.323}
            y1={388.466}
            x2={-262.611}
            y2={392.609}
            gradientTransform="matrix(31.2141 0 0 -22.3157 8294.877 8713.555)"
          >
            <stop offset={0} stopColor="#ffc69d" />
            <stop offset={1} stopColor="#febf9d" />
          </linearGradient>
          <path
            id="prefix__Path_1421"
            d="M18.6 5.2c-3.2 1-11.1 2-13.8 7.2C1.2 19.2 8.4 28 17.6 26.2S34.8 19 35.1 13.8c.2-3.3-2.1-12.9-16.5-8.6z"
            opacity={0.385}
            fill="url(#prefix__Path_1421_1_)"
          />
          <linearGradient
            id="prefix__Path_1422_1_"
            gradientUnits="userSpaceOnUse"
            x1={-266.2}
            y1={388.117}
            x2={-262.487}
            y2={392.276}
            gradientTransform="matrix(30.531 0 0 -21.7515 8109.926 8486.144)"
          >
            <stop offset={0} stopColor="#ffc296" />
            <stop offset={1} stopColor="#feba96" />
          </linearGradient>
          <path
            id="prefix__Path_1422"
            d="M18.6 5.5c-3.2.9-10.8 1.9-13.5 6.9-3.5 6.7 3.4 15.2 12.4 13.5s16.9-7 17.1-12.1c.2-3.2-2-12.5-16-8.3z"
            opacity={0.41}
            fill="url(#prefix__Path_1422_1_)"
          />
          <linearGradient
            id="prefix__Path_1423_1_"
            gradientUnits="userSpaceOnUse"
            x1={-266.071}
            y1={387.751}
            x2={-262.356}
            y2={391.926}
            gradientTransform="matrix(29.8467 0 0 -21.1882 7924.646 8259.129)"
          >
            <stop offset={0} stopColor="#ffbe90" />
            <stop offset={1} stopColor="#feb690" />
          </linearGradient>
          <path
            id="prefix__Path_1423"
            d="M18.5 5.7c-3.1 1-10.6 1.8-13.2 6.8C1.9 19 8.6 27.3 17.5 25.7S34 18.9 34.2 13.8c.2-3.1-1.9-12.2-15.7-8.1z"
            opacity={0.436}
            fill="url(#prefix__Path_1423_1_)"
          />
          <linearGradient
            id="prefix__Path_1424_1_"
            gradientUnits="userSpaceOnUse"
            x1={-265.936}
            y1={387.362}
            x2={-262.22}
            y2={391.556}
            gradientTransform="matrix(29.1631 0 0 -20.6223 7739.565 8031.03)"
          >
            <stop offset={0} stopColor="#ffbb89" />
            <stop offset={1} stopColor="#feb289" />
          </linearGradient>
          <path
            id="prefix__Path_1424"
            d="M18.4 6c-3 .9-10.3 1.7-12.9 6.5C2.2 18.9 8.8 27 17.4 25.4s16.1-6.6 16.4-11.6C34 10.7 32 2 18.4 6z"
            opacity={0.462}
            fill="url(#prefix__Path_1424_1_)"
          />
          <linearGradient
            id="prefix__Path_1425_1_"
            gradientUnits="userSpaceOnUse"
            x1={-265.795}
            y1={386.958}
            x2={-262.077}
            y2={391.17}
            gradientTransform="matrix(28.479 0 0 -20.0647 7554.35 7806.276)"
          >
            <stop offset={0} stopColor="#ffb783" />
            <stop offset={1} stopColor="#feae83" />
          </linearGradient>
          <path
            id="prefix__Path_1425"
            d="M18.4 6.3c-3 .9-10.1 1.6-12.6 6.3-3.3 6.3 3.1 14.1 11.6 12.5s15.7-6.4 16-11.3c.2-3-1.8-11.5-15-7.5z"
            opacity={0.487}
            fill="url(#prefix__Path_1425_1_)"
          />
          <linearGradient
            id="prefix__Path_1426_1_"
            gradientUnits="userSpaceOnUse"
            x1={-265.648}
            y1={386.525}
            x2={-261.927}
            y2={390.757}
            gradientTransform="matrix(27.7939 0 0 -19.501 7368.872 7579.064)"
          >
            <stop offset={0} stopColor="#ffb37c" />
            <stop offset={1} stopColor="#fda97c" />
          </linearGradient>
          <path
            id="prefix__Path_1426"
            d="M18.3 6.5c-2.9.9-9.8 1.5-12.2 6.1-3.3 6.2 3 13.8 11.3 12.2s15.3-6.2 15.6-11c.1-2.9-1.7-11.2-14.7-7.3z"
            opacity={0.513}
            fill="url(#prefix__Path_1426_1_)"
          />
          <linearGradient
            id="prefix__Path_1427_1_"
            gradientUnits="userSpaceOnUse"
            x1={-265.492}
            y1={386.068}
            x2={-261.77}
            y2={390.321}
            gradientTransform="matrix(27.1111 0 0 -18.938 7183.987 7352.145)"
          >
            <stop offset={0} stopColor="#ffaf76" />
            <stop offset={1} stopColor="#fda576" />
          </linearGradient>
          <path
            id="prefix__Path_1427"
            d="M18.3 6.8c-2.9.9-9.5 1.3-11.9 5.9-3.2 6 2.9 13.4 11 11.9s15-6 15.2-10.7c.1-3-1.6-10.9-14.3-7.1z"
            opacity={0.538}
            fill="url(#prefix__Path_1427_1_)"
          />
          <linearGradient
            id="prefix__Path_1428_1_"
            gradientUnits="userSpaceOnUse"
            x1={-265.329}
            y1={385.585}
            x2={-261.605}
            y2={389.86}
            gradientTransform="matrix(26.4282 0 0 -18.377 6999.104 7126.015)"
          >
            <stop offset={0} stopColor="#ffac6f" />
            <stop offset={1} stopColor="#fda16f" />
          </linearGradient>
          <path
            id="prefix__Path_1428"
            d="M18.2 7.1c-2.8.8-9.3 1.2-11.6 5.6-3.1 5.9 2.7 13 10.7 11.5s14.6-5.9 14.8-10.4c.2-2.8-1.5-10.5-13.9-6.7z"
            opacity={0.564}
            fill="url(#prefix__Path_1428_1_)"
          />
          <linearGradient
            id="prefix__Path_1429_1_"
            gradientUnits="userSpaceOnUse"
            x1={-265.157}
            y1={385.073}
            x2={-261.43}
            y2={389.371}
            gradientTransform="matrix(25.7446 0 0 -17.8184 6814.022 6900.87)"
          >
            <stop offset={0} stopColor="#ffa869" />
            <stop offset={1} stopColor="#fd9d69" />
          </linearGradient>
          <path
            id="prefix__Path_1429"
            d="M18.1 7.3c-2.7.8-9 1.1-11.3 5.4-3.1 5.8 2.6 12.7 10.4 11.2s14.2-5.7 14.4-10.1c.2-2.8-1.3-10.1-13.5-6.5z"
            opacity={0.59}
            fill="url(#prefix__Path_1429_1_)"
          />
          <linearGradient
            id="prefix__Path_1430_1_"
            gradientUnits="userSpaceOnUse"
            x1={-264.975}
            y1={384.522}
            x2={-261.246}
            y2={388.845}
            gradientTransform="matrix(25.0598 0 0 -17.2534 6628.61 6673.164)"
          >
            <stop offset={0} stopColor="#ffa462" />
            <stop offset={1} stopColor="#fd9862" />
          </linearGradient>
          <path
            id="prefix__Path_1430"
            d="M18.1 7.6c-2.7.8-8.8 1-11 5.2-3 5.7 2.5 12.3 10.2 10.9s13.8-5.5 14.1-9.8c0-2.8-1.4-9.9-13.3-6.3z"
            opacity={0.615}
            fill="url(#prefix__Path_1430_1_)"
          />
          <linearGradient
            id="prefix__Path_1431_1_"
            gradientUnits="userSpaceOnUse"
            x1={-264.783}
            y1={383.939}
            x2={-261.052}
            y2={388.288}
            gradientTransform="matrix(24.3774 0 0 -16.6929 6443.857 6447.229)"
          >
            <stop offset={0} stopColor="#ffa05c" />
            <stop offset={1} stopColor="#fd945c" />
          </linearGradient>
          <path
            id="prefix__Path_1431"
            d="M18 7.8c-2.6.8-8.5.8-10.7 5-2.9 5.5 2.4 11.9 9.9 10.5s13.4-5.3 13.7-9.5c.1-2.6-1.2-9.4-12.9-6z"
            opacity={0.641}
            fill="url(#prefix__Path_1431_1_)"
          />
          <linearGradient
            id="prefix__Path_1432_1_"
            gradientUnits="userSpaceOnUse"
            x1={-264.58}
            y1={383.313}
            x2={-260.846}
            y2={387.69}
            gradientTransform="matrix(23.6936 0 0 -16.1313 6258.708 6220.9)"
          >
            <stop offset={0} stopColor="#ff9c55" />
            <stop offset={1} stopColor="#fd9055" />
          </linearGradient>
          <path
            id="prefix__Path_1432"
            d="M18 8.1c-2.6.8-8.3.7-10.4 4.8-2.9 5.4 2.3 11.6 9.6 10.2s13.1-5.1 13.3-9.3c.1-2.6-1.2-9.1-12.5-5.7z"
            opacity={0.667}
            fill="url(#prefix__Path_1432_1_)"
          />
          <linearGradient
            id="prefix__Path_1433_1_"
            gradientUnits="userSpaceOnUse"
            x1={-264.365}
            y1={382.643}
            x2={-260.628}
            y2={387.05}
            gradientTransform="matrix(23.0073 0 0 -15.5701 6072.898 5994.67)"
          >
            <stop offset={0} stopColor="#ff994e" />
            <stop offset={1} stopColor="#fd8b4e" />
          </linearGradient>
          <path
            id="prefix__Path_1433"
            d="M17.9 8.4c-2.5.7-8 .6-10.1 4.6-2.8 5.2 2.2 11.1 9.3 9.8s12.7-4.9 12.9-9c.1-2.5-1-8.8-12.1-5.4z"
            opacity={0.692}
            fill="url(#prefix__Path_1433_1_)"
          />
          <linearGradient
            id="prefix__Path_1434_1_"
            gradientUnits="userSpaceOnUse"
            x1={-264.138}
            y1={381.925}
            x2={-260.398}
            y2={386.364}
            gradientTransform="matrix(22.3264 0 0 -15.0105 5888.545 5769.128)"
          >
            <stop offset={0} stopColor="#ff9548" />
            <stop offset={1} stopColor="#fd8748" />
          </linearGradient>
          <path
            id="prefix__Path_1434"
            d="M17.8 8.6c-2.4.8-7.7.5-9.8 4.4-2.7 5.1 2.1 10.9 9 9.5s12.3-4.7 12.5-8.7c.2-2.4-.8-8.4-11.7-5.2z"
            opacity={0.718}
            fill="url(#prefix__Path_1434_1_)"
          />
          <linearGradient
            id="prefix__Path_1435_1_"
            gradientUnits="userSpaceOnUse"
            x1={-263.896}
            y1={381.149}
            x2={-260.153}
            y2={385.622}
            gradientTransform="matrix(21.6436 0 0 -14.4487 5703.662 5542.702)"
          >
            <stop offset={0} stopColor="#ff9141" />
            <stop offset={1} stopColor="#fd8341" />
          </linearGradient>
          <path
            id="prefix__Path_1435"
            d="M17.8 8.9c-2.4.7-7.5.4-9.5 4.1-2.7 5 2 10.5 8.7 9.2s11.9-4.5 12.1-8.4c.2-2.4-.8-8.1-11.3-4.9z"
            opacity={0.744}
            fill="url(#prefix__Path_1435_1_)"
          />
          <linearGradient
            id="prefix__Path_1436_1_"
            gradientUnits="userSpaceOnUse"
            x1={-263.638}
            y1={380.316}
            x2={-259.891}
            y2={384.827}
            gradientTransform="matrix(20.9597 0 0 -13.8918 5518.513 5318.243)"
          >
            <stop offset={0} stopColor="#ff8d3b" />
            <stop offset={1} stopColor="#fd7f3b" />
          </linearGradient>
          <path
            id="prefix__Path_1436"
            d="M17.7 9.2c-2.3.7-7.2.2-9.2 3.9-2.6 4.9 1.9 10.1 8.5 8.8s11.5-4.3 11.7-8.1c.1-2.3-.7-7.7-11-4.6z"
            opacity={0.769}
            fill="url(#prefix__Path_1436_1_)"
          />
          <linearGradient
            id="prefix__Path_1437_1_"
            gradientUnits="userSpaceOnUse"
            x1={-263.363}
            y1={379.412}
            x2={-259.613}
            y2={383.963}
            gradientTransform="matrix(20.2778 0 0 -13.3333 5333.894 5093.095)"
          >
            <stop offset={0} stopColor="#ff8934" />
            <stop offset={1} stopColor="#fd7a34" />
          </linearGradient>
          <path
            id="prefix__Path_1437"
            d="M17.6 9.4c-2.3.7-7 .1-8.9 3.7-2.5 4.8 1.7 9.8 8.2 8.5s11.2-4.2 11.4-7.8c.1-2.2-.6-7.4-10.7-4.4z"
            opacity={0.795}
            fill="url(#prefix__Path_1437_1_)"
          />
          <linearGradient
            id="prefix__Path_1438_1_"
            gradientUnits="userSpaceOnUse"
            x1={-263.068}
            y1={378.431}
            x2={-259.314}
            y2={383.025}
            gradientTransform="matrix(19.5952 0 0 -12.7759 5149.076 4868.439)"
          >
            <stop offset={0} stopColor="#ff862e" />
            <stop offset={1} stopColor="#fd762e" />
          </linearGradient>
          <path
            id="prefix__Path_1438"
            d="M17.6 9.7c-2.2.7-6.7 0-8.6 3.5-2.5 4.6 1.6 9.4 7.9 8.2s10.8-4 11-7.5c.1-2.3-.6-7.1-10.3-4.2z"
            opacity={0.821}
            fill="url(#prefix__Path_1438_1_)"
          />
          <linearGradient
            id="prefix__Path_1439_1_"
            gradientUnits="userSpaceOnUse"
            x1={-262.752}
            y1={377.358}
            x2={-258.995}
            y2={382}
            gradientTransform="matrix(18.9111 0 0 -12.2175 4963.86 4643.387)"
          >
            <stop offset={0} stopColor="#ff8227" />
            <stop offset={1} stopColor="#fc7227" />
          </linearGradient>
          <path
            id="prefix__Path_1439"
            d="M17.5 9.9c-2.1.6-6.5-.1-8.3 3.3-2.4 4.5 1.5 9 7.6 7.9s10.4-3.8 10.6-7.2c.2-2.2-.4-6.8-9.9-4z"
            opacity={0.846}
            fill="url(#prefix__Path_1439_1_)"
          />
          <linearGradient
            id="prefix__Path_1440_1_"
            gradientUnits="userSpaceOnUse"
            x1={-262.413}
            y1={376.192}
            x2={-258.652}
            y2={380.885}
            gradientTransform="matrix(18.2305 0 0 -11.6631 4779.57 4419.913)"
          >
            <stop offset={0} stopColor="#ff7e21" />
            <stop offset={1} stopColor="#fc6d21" />
          </linearGradient>
          <path
            id="prefix__Path_1440"
            d="M17.5 10.2c-2.1.6-6.2-.2-8 3-2.3 4.4 1.4 8.7 7.3 7.5s10-3.6 10.2-7c.1-2-.3-6.3-9.5-3.5z"
            opacity={0.872}
            fill="url(#prefix__Path_1440_1_)"
          />
          <linearGradient
            id="prefix__Path_1441_1_"
            gradientUnits="userSpaceOnUse"
            x1={-262.049}
            y1={374.909}
            x2={-258.283}
            y2={379.658}
            gradientTransform="matrix(17.5496 0 0 -11.1086 4595.216 4196.436)"
          >
            <stop offset={0} stopColor="#ff7a1a" />
            <stop offset={1} stopColor="#fc691a" />
          </linearGradient>
          <path
            id="prefix__Path_1441"
            d="M17.4 10.5c-2 .6-6-.4-7.7 2.8-2.3 4.2 1.3 8.3 7 7.2s9.6-3.4 9.8-6.7c.2-2-.2-6-9.1-3.3z"
            opacity={0.897}
            fill="url(#prefix__Path_1441_1_)"
          />
          <linearGradient
            id="prefix__Path_1442_1_"
            gradientUnits="userSpaceOnUse"
            x1={-261.654}
            y1={373.493}
            x2={-257.883}
            y2={378.303}
            gradientTransform="matrix(16.8669 0 0 -10.5547 4410.398 3973.156)"
          >
            <stop offset={0} stopColor="#ff7614" />
            <stop offset={1} stopColor="#fc6514" />
          </linearGradient>
          <path
            id="prefix__Path_1442"
            d="M17.3 10.7c-1.9.6-5.7-.5-7.3 2.6-2.2 4.1 1.2 7.9 6.8 6.9s9.3-3.2 9.4-6.4c.1-1.9-.2-5.7-8.9-3.1z"
            opacity={0.923}
            fill="url(#prefix__Path_1442_1_)"
          />
          <linearGradient
            id="prefix__Path_1443_1_"
            gradientUnits="userSpaceOnUse"
            x1={-261.226}
            y1={371.928}
            x2={-257.449}
            y2={376.805}
            gradientTransform="matrix(16.1858 0 0 -10.0034 4225.977 3750.959)"
          >
            <stop offset={0} stopColor="#ff730d" />
            <stop offset={1} stopColor="#fc610d" />
          </linearGradient>
          <path
            id="prefix__Path_1443"
            d="M17.3 11c-1.9.6-5.5-.6-7 2.4-2.1 4 1.1 7.6 6.5 6.5s8.9-3 9-6.1c0-1.9-.1-5.3-8.5-2.8z"
            opacity={0.949}
            fill="url(#prefix__Path_1443_1_)"
          />
          <linearGradient
            id="prefix__Path_1444_1_"
            gradientUnits="userSpaceOnUse"
            x1={-260.762}
            y1={370.179}
            x2={-256.98}
            y2={375.13}
            gradientTransform="matrix(15.5054 0 0 -9.4519 4041.753 3528.66)"
          >
            <stop offset={0} stopColor="#ff6f07" />
            <stop offset={1} stopColor="#fc5c07" />
          </linearGradient>
          <path
            id="prefix__Path_1444"
            d="M17.2 11.3c-1.8.5-5.2-.7-6.7 2.2-2.1 3.9 1 7.2 6.2 6.2s8.5-2.8 8.7-5.8c0-1.9 0-5.1-8.2-2.6z"
            opacity={0.974}
            fill="url(#prefix__Path_1444_1_)"
          />
          <linearGradient
            id="prefix__Path_1445_1_"
            gradientUnits="userSpaceOnUse"
            x1={-260.256}
            y1={368.215}
            x2={-256.467}
            y2={373.249}
            gradientTransform="matrix(14.8262 0 0 -8.9004 3857.862 3306.358)"
          >
            <stop offset={0} stopColor="#ff6b00" />
            <stop offset={1} stopColor="#fc5800" />
          </linearGradient>
          <path
            id="prefix__Path_1445"
            d="M17.2 11.5c-1.8.5-4.9-.8-6.4 2-2 3.7.9 6.8 5.9 5.9s8.1-2.6 8.3-5.5c0-1.8 0-4.7-7.8-2.4z"
            fill="url(#prefix__Path_1445_1_)"
          />
        </g>

        <linearGradient
          id="prefix__Path_1446_1_"
          gradientUnits="userSpaceOnUse"
          x1={-152.657}
          y1={462.212}
          x2={-151.657}
          y2={462.212}
          gradientTransform="matrix(8.8921 0 0 -8.8921 1528.276 4135.243)"
        >
          <stop offset={0} stopColor="#ff6b00" />
          <stop offset={1} stopColor="#fc5800" />
        </linearGradient>
        <path
          id="prefix__Path_1446"
          d="M179.7 25.2c0-2.5-2-4.4-4.4-4.4s-4.4 2-4.4 4.4c0 2.5 2 4.4 4.4 4.4 2.4.1 4.4-1.9 4.4-4.4z"
          fill="url(#prefix__Path_1446_1_)"
        />
        <path
          id="prefix__Path_1447"
          className="prefix__st1"
          d="M180.3 182c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2 1 2.2 2.2 2.2c1.2.1 2.2-.9 2.2-2.2z"
        />
        <g id="prefix__Group_2041" transform="translate(143.839 3.785)">
          <path
            id="prefix__Path_1448"
            className="prefix__st1"
            d="M8.9 17.9c-4.9 0-8.9-4-8.9-9C0 4 4 0 8.9 0s8.9 4 8.9 8.9c.1 5-3.9 9-8.9 9zm0-16.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.3-7.5-7.5-7.5z"
          />
        </g>
        <path
          id="prefix__Path_1449"
          className="prefix__st1"
          d="M120.4 12.5c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2z"
        />

        <g id="prefix__Group_2042" transform="translate(37.352 112.459)">
          <path
            id="prefix__Path_1450"
            className="prefix__st1"
            d="M2.1 53.4c-1.2 0-2.1-1-2.1-2.1 0-.5.2-1 .5-1.4L43.1.7c.7-.9 2.1-1.1 3-.3s1.1 2.1.3 3l-.1.1L3.8 52.7c-.4.4-1 .7-1.7.7z"
          />
        </g>
        <g id="prefix__Group_2043" transform="translate(173.334 10.594)">
          <linearGradient
            id="prefix__Path_1451_1_"
            gradientUnits="userSpaceOnUse"
            x1={-341.267}
            y1={478.71}
            x2={-340.267}
            y2={478.71}
            gradientTransform="matrix(42.2874 0 0 -47.7708 14431.26 22892.209)"
          >
            <stop offset={0} stopColor="#ff5600" />
            <stop offset={1} stopColor="#f75600" />
          </linearGradient>
          <path
            id="prefix__Path_1451"
            d="M3.2 47.8c-1.8 0-3.2-1.4-3.2-3.2 0-.8.3-1.5.8-2.1L36.7 1.1c1.2-1.3 3.2-1.5 4.5-.3s1.5 3.2.3 4.5L5.6 46.7c-.6.7-1.5 1.1-2.4 1.1z"
            fill="url(#prefix__Path_1451_1_)"
          />
        </g>
        <g id="prefix__Group_2044" transform="translate(9.385 131.629)">
          <path
            id="prefix__Path_1452"
            className="prefix__st1"
            d="M2.1 36.7c-1.2 0-2.1-1-2.1-2.1 0-.5.2-1 .5-1.4L29.5.7c.8-.9 2.2-.9 3-.1.8.8.9 2.1.2 3L3.7 36c-.4.5-1 .7-1.6.7z"
          />
        </g>
        <g transform="translate(59.127 17.428)" id="prefix__Group_2046">
          <defs>
            <path
              id="prefix__SVGID_3_"
              d="M73.5 99.6C66.9 87.5 63 57.3 37.2 52.8c-18.3-3.2-20-11.6-29.4-24.4-3.5-4.8-13.2-2.7-2.1-14.2C15.5 4.1-8.2 3.3 3.1 1.2c39.4-7.4 84.4 23.6 109.8 19.4 54.9-8.9 70.5 25.6 72.1 47.2 1.9 26.8-4.3 49.8-40.2 49.8-42.7 0-5.8-21.4-43.4-20.5-33.8.9-18.4 20.1-27.9 2.5z"
            />
          </defs>
          <clipPath id="prefix__SVGID_4_">
            <use xlinkHref="#prefix__SVGID_3_" overflow="visible" />
          </clipPath>
          <g id="prefix__Group_2045" clipPath="url(#prefix__SVGID_4_)">
            <linearGradient
              id="prefix__Path_1453_1_"
              gradientUnits="userSpaceOnUse"
              x1={-230.38}
              y1={476.412}
              x2={-229.373}
              y2={476.412}
              gradientTransform="matrix(229.0876 0 0 -178.3257 52755.137 85028.25)"
            >
              <stop offset={0} stopColor="#ff5600" />
              <stop offset={1} stopColor="#f75600" />
            </linearGradient>
            <path
              id="prefix__Path_1453"
              d="M-21.2 12.4c0-1.7.1-3.4.4-5.1.2-1.7.6-3.3 1.1-5 1-3.3 2.5-6.4 4.5-9.1 2.1-2.8 4.7-5.1 7.7-6.7.7-.5 1.5-.8 2.3-1.2.8-.3 1.6-.7 2.4-.9.8-.3 1.6-.5 2.5-.7.4-.1.8-.2 1.3-.3l1.3-.2c3.4-.5 6.8-.8 10.2-.6 3.4.1 6.8.7 10.1 1.7s6.4 2.4 9.3 4.3c2.9 1.9 5.5 4.1 7.9 6.6C42-2.3 44.1.4 46 3.2c1.9 2.9 3.5 5.8 5 8.9 2.9 6.1 5.4 12.5 7.4 19 .5 1.6 1 3.3 1.4 4.9.5 1.6.9 3.3 1.3 4.9l1.2 4.9.6 2.4.8 2.3c1.7 4.6 4.7 8.6 8.6 11.6 1.3 1 2.7 1.8 4.2 2.6 5.8 3 12.5 4.4 19.1 5 6.7.5 13.4.5 20.1 0 6.7-.4 13.4-1.2 20.1-1.9 6.7-.8 13.4-1.7 20.1-2.5s13.4-1.4 20.2-1.6c3.4-.1 6.8 0 10.1.3 3.4.3 6.7 1.1 9.9 2.3 1.6.6 3.1 1.5 4.5 2.5 1.4 1.1 2.6 2.3 3.5 3.8.9 1.4 1.7 3 2.3 4.6.5 1.6.9 3.3 1.2 5 .9 6.8-.1 13.7-2 20.2s-4.7 12.8-8.2 18.6c-3.5 5.9-7.6 11.3-12.4 16.2-4.7 4.9-10.1 9.2-15.9 12.8-2.9 1.8-5.9 3.4-9.1 4.8-3.1 1.4-6.4 2.5-9.6 3.4-3.3.9-6.6 1.6-10 2-3.4.5-6.8.6-10.2.6h-1.3l-1.3-.1c-.9-.1-1.7-.1-2.6-.1-1.7-.2-3.4-.3-5.1-.6-1.7-.2-3.4-.6-5-.9-.8-.2-1.7-.4-2.5-.6s-1.7-.4-2.5-.6c-6.6-1.8-13-4.2-19-7.3-3-1.5-6-3.2-8.9-4.9l-4.3-2.6c-.7-.4-1.5-.9-2.2-1.3l-2.1-1.4-4.3-2.8c-1.4-.9-2.8-1.9-4.2-2.9-1.4-1-2.8-1.9-4.1-2.9l-4.1-3c-1.4-1-2.7-2.1-4-3.1s-2.7-2.1-3.9-3.2c-2.6-2.2-5.1-4.4-7.6-6.8-2.5-2.3-4.9-4.7-7.2-7.1l-3.4-3.7c-.6-.6-1.1-1.3-1.7-1.9l-1.9-2c-4.4-5.2-8.5-10.6-12.2-16.3C7.4 73.4 1.6 61.1-3.5 48.6c-2.6-6.2-5-12.5-7.8-18.7-1.4-3.1-2.8-6.1-4.5-9-1.6-2.9-3.4-5.8-5.4-8.5zm.2-.1c2.1 2.7 3.9 5.5 5.6 8.4 1.7 2.9 3.2 5.9 4.7 9 2.9 6.1 5.5 12.3 8.2 18.5S2.9 60.5 6 66.5c3.1 6 6.5 11.8 10.2 17.3 3.7 5.6 7.8 10.9 12.2 16l1.7 1.9c.5.6 1.1 1.3 1.7 1.9l3.4 3.7c2.4 2.4 4.7 4.8 7.2 7 9.9 9 20.6 17.2 32 24.4l2.1 1.4c.7.5 1.4.9 2.2 1.3L83 144c2.9 1.7 5.8 3.3 8.8 4.8 6 3 12.2 5.4 18.6 7.2l2.4.6 2.4.6c1.6.3 3.3.7 4.9.9 1.6.3 3.3.4 4.9.6.8.1 1.7.1 2.5.2l1.2.1h1.2c3.3.1 6.6-.1 9.9-.5 3.3-.4 6.6-1 9.8-1.9 3.2-.9 6.3-2 9.4-3.3 3-1.3 6-2.9 8.9-4.6 5.7-3.5 11-7.6 15.6-12.4 4.7-4.8 8.8-10 12.4-15.7 3.5-5.7 6.3-11.8 8.3-18.2 1.9-6.4 3-13.1 2.2-19.7-.2-1.6-.6-3.3-1.1-4.8-.5-1.6-1.3-3.1-2.1-4.5-.9-1.4-2-2.6-3.3-3.6-1.3-1-2.7-1.8-4.3-2.5-3.1-1.2-6.4-2-9.7-2.3-3.3-.3-6.7-.5-10.1-.4-6.7.1-13.4.9-20.1 1.7-6.7.8-13.4 1.8-20 2.6-6.7.9-13.4 1.7-20.1 2.3-6.8.6-13.5.7-20.3.3-6.8-.5-13.6-1.7-19.8-4.9-1.5-.8-3-1.7-4.4-2.7-4.2-3.2-7.4-7.5-9.3-12.4-.3-.8-.6-1.6-.8-2.5l-.7-2.5-1.2-4.9-1.1-5.1c-.5-1.6-.9-3.2-1.4-4.8-1.9-6.4-4.3-12.7-7.1-18.7-1.4-3-3.1-5.9-4.9-8.7-1.8-2.8-3.8-5.4-6.1-7.9C36.2-6 33.7-8.2 31-10c-2.8-1.8-5.8-3.3-8.9-4.3-3.2-1-6.4-1.6-9.8-1.7-3.3-.2-6.7 0-10 .5-3.3.4-6.5 1.5-9.4 3-2.9 1.6-5.5 3.7-7.6 6.3-2 2.6-3.6 5.6-4.6 8.8-1 3.1-1.6 6.4-1.7 9.7z"
              fill="url(#prefix__Path_1453_1_)"
            />
          </g>
        </g>
        <g id="prefix__Group_2049" transform="translate(24.97 6.154)">
          <g id="prefix__Group_2047" transform="translate(2.599)">
            <path
              id="prefix__Path_1455"
              className="prefix__st1"
              d="M5.3 11.6c-.4 0-.8-.2-1-.6L.1 1.5C-.1 1 .1.3.6.1c.5-.2 1.2 0 1.4.5L6.2 10c.2.5 0 1.2-.5 1.4-.1.1-.2.2-.4.2z"
            />
          </g>
          <g id="prefix__Group_2048" transform="translate(0 2.598)">
            <path
              id="prefix__Path_1456"
              className="prefix__st1"
              d="M1.1 6.4C.5 6.4 0 5.9 0 5.3c0-.4.2-.8.6-1L10 .1c.5-.2 1.2 0 1.4.6.2.5 0 1.1-.5 1.4L1.5 6.3c-.1 0-.3.1-.4.1z"
            />
          </g>
        </g>
        <g id="prefix__Group_2052" transform="translate(248.765 106.186)">
          <g id="prefix__Group_2050" transform="translate(1.365)">
            <path
              id="prefix__Path_1457"
              className="prefix__st1"
              d="M.9 8.8C.4 8.8 0 8.4 0 8c0-.2 0-.3.1-.5L4.5.4c.2-.4.7-.6 1.2-.3.4.2.5.7.3 1.1v.1L1.6 8.4c-.2.3-.4.4-.7.4z"
            />
          </g>
          <g id="prefix__Group_2051" transform="translate(0 1.365)">
            <path
              id="prefix__Path_1458"
              className="prefix__st1"
              d="M8 6.1c-.2 0-.4-.1-.5-.1L.4 1.6C0 1.4-.2.8.1.4.3 0 .8-.1 1.2.1h.1l7.1 4.4c.4.2.5.8.3 1.2-.2.2-.4.4-.7.4z"
            />
          </g>
        </g>
        <linearGradient
          id="prefix__Path_1459_1_"
          gradientUnits="userSpaceOnUse"
          x1={-166.183}
          y1={475.164}
          x2={-162.395}
          y2={480.198}
          gradientTransform="matrix(26.2722 0 0 -15.7778 4450.623 7629.8)"
        >
          <stop offset={0} stopColor="#ff6b00" />
          <stop offset={1} stopColor="#fc5800" />
        </linearGradient>
        <path
          id="prefix__Path_1459"
          d="M116.3 101.6c-3.1.9-8.8-1.5-11.4 3.5-3.5 6.6 1.5 12.1 10.5 10.4s14.4-4.7 14.7-9.8c.1-3.2.2-8.3-13.8-4.1z"
          fill="url(#prefix__Path_1459_1_)"
        />
        <linearGradient
          id="prefix__Path_1460_1_"
          gradientUnits="userSpaceOnUse"
          x1={-171.356}
          y1={494.385}
          x2={-169.846}
          y2={492.835}
          gradientTransform="matrix(244.4587 0 0 -166.3865 41874.906 82247.547)"
        >
          <stop offset={0} stopColor="#f45600" />
          <stop offset={1} stopColor="#bd4200" />
        </linearGradient>
        <path
          id="prefix__Path_1460"
          className="faze_one_animate_2"
          d="M77 146.5c-6.6-12.2-14.3-20.4-40.2-24.9-25.1-4.4-58.3-45.3-17.8-87.4 44-45.7 120.4 9.1 153 3.8 54.9-8.9 70.5 25.6 72.1 47.2 1.9 26.8-4.3 49.8-40.2 49.8-42.7 0-40.3 46.2-77.8 47.2-33.8.9-39.5-18.1-49.1-35.7z"
          fill="url(#prefix__Path_1460_1_)"
        />
      </g>
    </g>
  </svg>
)

class Landing extends PureComponent {
    constructor(props) {
      super(props);
      this.body = document.querySelector('body');
    }

    state = {
      index: 0,
      list: ['Šta morate znati prije poduzimanja bilo kakvih koraka', 'Trogodišnji budžetski ciklus'],
      mainHeading: 'NULTA FAZA',
      mainUnderheading: 'UVOD U GRANT ŠEME'
    }

    componentDidMount() {
      setTimeout(() => {
        this.body.classList.add('loaded');
      }, 500);
    }

    shift = () => {
      const landing = document.getElementById('landing');
      landing.style.transform = 'translate3d(-100%,0,0)';
    }

    shiftToFazeZero = () => {
      this.shift();

      this.setState({
        index: 0,
        list: ['Šta morate znati prije poduzimanja bilo kakvih koraka', 'Trogodišnji budžetski ciklus'],
        mainHeading: 'NULTA FAZA',
        mainUnderheading: 'UVOD U GRANT ŠEME'
      })
    }

    shiftToFazeOne = () => {
      this.shift();

      this.setState({
        index: 1,
        list: ['Prvi koraci', 'Formiranje tima za izradu grant šeme', 'Provjera relevantnosti politike', 'Uključivanje relevantnih aktera', 'Analiza problema, potreba, prilika i potražnje', 'Jasnoća pravca djelovanja', 'Ispitivanje predizvodljivosti', 'Strukturiranje koncepta šeme', 'Postavljanje parametara za kriterije odabira', 'Razrada podzakonskih akata'],
        mainHeading: 'PRVA FAZA',
        mainUnderheading: 'KONCEPTUALIZACIJA ŠEME'
      })
    }


    shiftToFazeTwo = () => {
      this.shift();

      this.setState({
        index: 2,
        list: ['Definiranje izlaznih rezultata šeme', 'Definiranje prihvatljivih aplikanata, aktivnosti i troškova', 'Omogućavanje optimalnog odgovora aplikanata na šemu', 'Kriteriji odabira', 'Scenarij za implementaciju', 'Opća procjena izvodljivosti šeme', 'Izrada plana za monitoring i izvještavanje'],
        mainHeading: 'DRUGA FAZA',
        mainUnderheading: 'IZRADA ŠEME'
      })
    }

    shiftToFazeThree = () => {
      this.shift();

      this.setState({
        index: 3,
        list: ['Razrada javnog poziva', 'Razrada obrasca prijave','Razrada smjernica za aplikante', 'Objava javnog poziva za dostavljanje projekata'],
        mainHeading: 'TREĆA FAZA',
        mainUnderheading: 'RAZRADA DOKUMENATA U OKVIRU ŠEME'
      })
    }

    setCurrentPageAndSubpage = (p,sp) => {
      this.props.setCurrentPage(p,sp);
    }

    render() {
        return (
            <div id="landing">
                <div className="heading-top d-flex d-flex-jcsb">
                    <div className="heading">
                      <h2>Izrada javnih grant šema:</h2>
                      <h1>Priručnik za praktičare iz javnog sektora</h1>
                    </div>
                    <MenuButtons className="menu_items_landing" />
                </div>
                <div className="landing_pic">
                    <img src="../images/landing_pic.png" alt="Landing Pic" />
                </div>
                <div className="fazes d-flex d-flex-jcsb d-flex-d-c">
                    <div className=" d-flex d-flex-jcsb">
                      <div className="one_faze">
                        <div className="card">
                          <div className="front">
                            <div className="faze_picture">
                                <img src="../images/faze_one_people.png" alt="faze_one" />
                                <FazeOneSvg />
                            </div>
                            <h2 className="main-heading">NULTA FAZA</h2>
                            <h3>UVOD U GRANT ŠEME</h3>
                          </div>
                          <div className="back yellow_color">
                            <h2 className="main-heading">NULTA FAZA</h2>
                            <p className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam fugiat rem corrupti beatae ipsam delectus, officiis asperiores assumenda voluptatum iste ratione inventore at aspernatur? Ab dicta repellat modi quis. Voluptatem vitae doloribus quasi. Voluptatem vitae doloribus quasi.</p>
                            <p onClick={this.shiftToFazeZero} className="main-text white">Pročitaj više <img src="../images/arrow.png" alt="arrow" /></p>
                          </div>
                        </div>
                    </div>

                    <div className="one_faze">
                      <div className="card">
                        <div className="front">
                          <div className="faze_picture">
                              <img src="../images/faze_two_people.png" alt="faze_one" />
                              <FazeTwoSvg color={'#cd4800'} color2={'#c44500'}/>
                          </div>
                          <h2 className="main-heading">PRVA FAZA</h2>
                          <h3>KONCEPTUALIZACIJA ŠEME</h3>
                        </div>
                        <div className="back orange_color">
                          <h2 className="main-heading">PRVA FAZA</h2>
                          <p className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam fugiat rem corrupti beatae ipsam delectus, officiis asperiores assumenda voluptatum iste ratione inventore at aspernatur? Ab dicta repellat modi quis. Voluptatem vitae doloribus quasi. Voluptatem vitae doloribus quasi.</p>
                          <p onClick={this.shiftToFazeOne} className="main-text white">Pročitaj više <img src="../images/arrow.png" alt="arrow" /></p>
                        </div>
                      </div>
                    </div>

                    <div className="one_faze">
                      <div className="card">
                        <div className="front">
                          <div className="faze_picture">
                              <img src="../images/faze_three_people.png" alt="faze_one" />
                              <FazeThreeSvg />
                          </div>
                          <h2 className="main-heading">DRUGA FAZA</h2>
                          <h3>IZRADA ŠEME</h3>
                        </div>
                        <div className="back lightblue_color">
                          <h2 className="main-heading">DRUGA FAZA</h2>
                          <p className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam fugiat rem corrupti beatae ipsam delectus, officiis asperiores assumenda voluptatum iste ratione inventore at aspernatur? Ab dicta repellat modi quis. Voluptatem vitae doloribus quasi. Voluptatem vitae doloribus quasi.</p>
                          <p onClick={this.shiftToFazeTwo} className="main-text white">Pročitaj više <img src="../images/arrow.png" alt="arrow" /></p>
                        </div>
                      </div>
                    </div>

                    <div className="one_faze">  
                      <div className="card">
                        <div className="front">
                          <div className="faze_picture blue_color">
                              <img src="../images/faze_four_people.png" alt="faze_one" />
                              <FazeTwoSvg color={'#cd4800'} color2={'#c44500'}/>
                          </div>
                          <h2 className="main-heading">TREĆA FAZA</h2>
                          <h3>RAZRADA DOKUMENATA U OKVIRU ŠEME</h3>
                        </div>
                        <div className="back darkblue_color">
                          <h2 className="main-heading">TREĆA FAZA</h2>
                          <p className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam fugiat rem corrupti beatae ipsam delectus, officiis asperiores assumenda voluptatum iste ratione inventore at aspernatur? Ab dicta repellat modi quis. Voluptatem vitae doloribus quasi. Voluptatem vitae doloribus quasi.</p>
                          <p onClick={this.shiftToFazeThree} className="main-text white">Pročitaj više <img src="../images/arrow.png" alt="arrow" /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="download d-flex d-flex-jcc">
                    <a href="" className="button">Preuzmi<br></br> dokument</a>
                    <a href="" className="button ml-15">Download <br></br>document</a>
                  </div>
                </div>

                <div className="bottom_buttons">
                  <div className="one_button">
                    <img src="../images/settings.png" alt="icon" />
                    <p>Alati i <br></br>obrasci</p>
                  </div>
                  <div className="one_button">
                    <img src="../images/documents.png" alt="icon" />
                    <p>Studije <br></br>slučaja</p>
                  </div>
                  <div className="one_button">
                    <img src="../images/flag.png" alt="icon" />
                    <p>Rječnik<br></br> ključnih<br></br> pojmova</p>
                  </div>
                </div>

                <div className="logos">
                    <img src="../images/undp.svg" className="undp" alt="swiss agency" />
                    <img src="../images/swiss_agency.svg" alt="swiss agency" /> 
                </div>

                <div className="copy">
                  <p>Copyright 2019 - All rights reserved. CREATED BY <a href="https://mania.marketing/" target="_blank" className="mania">MANIA</a> </p>
                </div>

                <FazeLanding>
                    <div className="d-flex d-flex-jcsb list_name_wrap">
                        <div className="d-flex-m-5_5 d-flex d-flex-aafe">
                          <ul className="menu_list">
                            {this.state.list.map((e,i) => {
                              return (
                                <li key={e} onClick={() => this.setCurrentPageAndSubpage(this.state.index, i + 1)} className="d-flex">{`${this.state.index}.${i + 1}`} <Link to={`/page=${this.state.index}&subpage=${i + 1}`}>{e}</Link></li>
                              )
                            })}
                        </ul>
                      </div>
                      <div className="d-flex-m-5_5">
                        <h1 className="faze_landing_heading">{this.state.mainHeading}</h1>
                      </div>
                    </div>

                    <div className="faze_landing_underheading d-flex d-flex-jcfe">{this.state.mainUnderheading}</div>
                </FazeLanding>
            </div>
        )
    }
}

export default connect(null, { setCurrentPage })(Landing)