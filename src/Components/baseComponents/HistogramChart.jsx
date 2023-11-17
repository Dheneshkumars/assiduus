import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const HistogramChart = (props) => {
    const {data} = props;
    const svgWidth = 370;
    const svgRef = useRef();
    const maxDataValue = d3.max(data);
    const svgHeight = maxDataValue * 7;

    useEffect(() => {
        // bottom scale values
        const bottomScaleValues = ['Older', 'Jan 01-08', 'Jan 09-16', 'Jan 17-24', 'Jan 25-31', 'Future'];

        const xScale = d3.scaleBand()
            .domain(bottomScaleValues)
            .range([0, svgWidth]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, svgHeight]);

        const svg = d3.select(svgRef.current);
        const xOffset = 20;
        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * (svgWidth / (data.length - 1)) + xOffset) 
            .attr('y', d => svgHeight - yScale(d))
            .attr('width', 10)
            .attr('height', d => yScale(d))
            .attr('fill', 'green')
            .attr('rx', 5)
            .attr('ry', 3);
        
        const xAxis = d3.axisBottom(xScale);
        svg.append('g')
            .attr('transform', `translate(0, ${svgHeight})`)
            .call(xAxis)
            .selectAll('text')
            .attr('fill', '#C5C7C9')

            svg.selectAll('.domain, .tick line').remove(); 
    }, [data]);

    return (
        <svg ref={svgRef} width="100%" height="200" viewBox={`0 0 ${svgWidth} ${svgHeight}`}></svg>
    );
};

export default HistogramChart;
