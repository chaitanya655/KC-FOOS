import React from 'react';
import Lottie from 'lottie-react';

// Embedded Lottie animation data to resolve missing file and path alias issues.
const foodAnimationData = {"v":"5.9.6","fr":60,"ip":0,"op":180,"w":1080,"h":1080,"nm":"Food Ring Loading Animation","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Stroke 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[864,864],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":432,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect"},{"ty":"st","c":{"a":0,"k":[1,0.380392156863,0.313725490196,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":48,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"tr":{"s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0,0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":30,"s":[35,35]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":120,"s":[35,35]},{"t":180,"s":[0,0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0,0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":60,"s":[35,35]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":150,"s":[35,35]},{"t":180,"s":[0,0]}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":90,"s":[0]},{"t":150,"s":[-360]}],"ix":3}},"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":180,"st":0,"bm":0}]}

const SplashScreen: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-gray-900 flex flex-col justify-center items-center z-[200]">
            <Lottie animationData={foodAnimationData} className="w-64 h-64" />
            <div className="text-5xl font-bold text-white tracking-wider mt-4">
                KC <span className="text-primary">FOODS</span>
            </div>
            <p className="text-gray-400 mt-2 text-lg">Cooking up your favorites...</p>
        </div>
    );
};

export default SplashScreen;