import React, { Fragment } from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                repeat: Infinity,
                duration: 0.5,
            },
            y: {
                repeat: Infinity,
                duration: 0.25,
                ease: "easeOut", 
            }
        }
    },
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                repeat: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
}

const Loader = () => {
    const[animation, cycleAnimation] = useCycle("animationOne", "animationTwo")

    return (
        <Fragment>
            <motion.div className="loader"
                // variants={loaderVariants}
                // animate={animation}
            >

            </motion.div>
            <div onClick={() => cycleAnimation()}>Cycle Loader</div>
        </Fragment>
    )
}

export default Loader;