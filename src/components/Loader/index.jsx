import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from "./styles.module.css";
import { useLenis } from "lenis/react";

const Loader = () => {
    const loaderRef = useRef();
    const num1wrapRef = useRef();
    const num2wrapRef = useRef();
    const num3wrapRef = useRef();
    const lenis = useLenis();

    useEffect(() => {
        const loader = loaderRef.current;
        const num1wrap = num1wrapRef.current;
        const num2wrap = num2wrapRef.current;
        const num3wrap = num3wrapRef.current;

        const loadAn = gsap.timeline({
            yoyo: true,
            id: 'pageLoader',
            onStart: function () {
                document.body.classList.add('loading');
              },
              onComplete: function () {
                document.body.classList.remove('loading');
                gsap.set(loader, {
                    visibility: "hidden",
                    opacity: 0,
                    display: "none",
                })
              },
        });

        loadAn.to(
            num1wrap,
            {
                y: '-91%',
                ease: 'power2.inOut',
                duration: 5,
            },
            0.25
        );

        loadAn.to(
            num2wrap,
            {
                y: '-95.3%',
                ease: 'power2.inOut',
                duration: 5,
            },
            0.25
        );

        loadAn.to(
            num3wrap,
            {
                y: '0%',
                ease: 'power2.out',
                duration: 1.5,
            },
            0.5
        );

        loadAn.to(
            num3wrap,
            {
                y: '-50%',
                ease: 'power2.out',
                duration: 1,
            },
            5 - 0.6
        );

        // Loader Out
        loadAn.to(
            ".aplNumWrapper",
            {
                y: '-100%',
                ease: 'power2.in',
                stagger: 0.1,
                duration: 0.6,
            },
            5 + 0.6
        );

        loadAn.to(loader, {
            yPercent: -100,
            duration: 0.6,
            ease: "power2.out",
        });
    }, [lenis]);

    const nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
    const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
        <div
            ref={loaderRef}
            className={styles.aliothPageLoader}
        >
            <span className={styles.aplBackground}></span>
            <div className={styles.aplCount}>
                <div className={styles.aplWrapper}>
                    <div className={`${styles.aplNum} ${styles.aplNum1} aplNumWrapper`}>
                        <div className={styles.aplNumWrapper} ref={num1wrapRef}>
                            {nums1.map((num, index) => (
                                <span key={index}>{num}</span>
                            ))}
                        </div>
                    </div>
                    <div className={`${styles.aplNum} ${styles.aplNum2} aplNumWrapper`}>
                        <div className={styles.aplNumWrapper} ref={num2wrapRef}>
                            {nums2.map((num, index) => (
                                <span key={index}>{num}</span>
                            ))}
                        </div>
                    </div>
                    <div className={`${styles.aplNum} ${styles.aplNum3} aplNumWrapper`}>
                        <div className={styles.aplNumWrapper} ref={num3wrapRef}>
                            <span>%</span>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;