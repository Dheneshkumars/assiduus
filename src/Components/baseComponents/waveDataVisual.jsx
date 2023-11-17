import React, { useEffect, useRef } from 'react';
import { select, line, curveCardinal } from 'd3';

const WaveDataVisual = (props) => {
    const { data } = props;
    const svgRef = useRef();
    const curveWidth = 45;
    const svgHeight = 200;
    const svgWidth = 450;
    const animationDuration = 1000;

    useEffect(() => {
        const svg = select(svgRef.current);

        // Create the line generator
        const myCurve = line()
            .x((value, index) => index * curveWidth)
            .y((value) => svgHeight - value)
            .curve(curveCardinal);

        // Join data to paths, creating/update paths as needed
        const paths = svg
            .selectAll('path')
            .data([data]);

        // Enter new paths
        paths.enter()
            .append('path')
            .attr('fill', 'none')
            .attr('stroke', 'green')
            .attr('d', myCurve);

        // Update existing paths with a transition
        paths.transition()
            .duration(animationDuration)
            .attr('d', myCurve);

        // Scale text
        const scaleValues = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

        svg
            .selectAll('.scale-text')
            .data(scaleValues)
            .enter()
            .append('text')
            .attr('class', 'scale-text')
            .attr('x', (value, index) => index * 54)
            .attr('y', 180)
            .attr('text-anchor', 'left')
            .attr('fill', '#C5C7C9')
            .text((d) => d);

    }, [animationDuration, curveWidth, svgHeight, data]);

    return <svg className="wavechart" width='100%' height={svgHeight} ref={svgRef}></svg>;
};

export default WaveDataVisual;
