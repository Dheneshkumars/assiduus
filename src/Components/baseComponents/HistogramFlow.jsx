import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Bar = ({ x, y, height }) => {
  const gradientId = `gradient-${x}-${y}`;
  return (
    <g>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'darkgreen', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'lightgreen', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect
        x={x}
        y={y}
        width="10"
        height={height}
        fill={`url(#${gradientId})`}
        rx={5}
        ry={3}
      />
    </g>
  );
};

const HistogramFlow = (props) => {
  const { data } = props;
  const svgWidth = 370;
  const svgRef = useRef();
  const maxDataValue = d3.max(data);
  const svgHeight = maxDataValue * 7;

  useEffect(() => {
    // bottom scale values
    const bottomScaleValues = ['August', 'September', 'October', 'November', 'December', 'January'];

    const xScale = d3.scaleBand().domain(bottomScaleValues).range([0, svgWidth]);

    const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([0, svgHeight]);

    const svg = d3.select(svgRef.current);
    const xOffset = 20;

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'bar')
      .each(function (d, i) {
        const bar = d3.select(this);
        bar.append('rect')
          .attr('x', i * (svgWidth / (data.length - 1)) + xOffset)
          .attr('y', d => svgHeight - yScale(d))
          .attr('width', 10)
          .attr('height', d => yScale(d))
          .attr('rx', 5)
          .attr('ry', 3)
          .attr('fill', 'url(#gradient)');
      });

    const xAxis = d3.axisBottom(xScale);
    svg
      .append('g')
      .attr('transform', `translate(0, ${svgHeight})`)
      .call(xAxis)
      .selectAll('text')
      .attr('fill', '#C5C7C9');

    svg.selectAll('.domain, .tick line').remove();
  }, [data]);

  return (
    <svg ref={svgRef} width="100%" height="200" viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'darkgreen', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'lightgreen', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HistogramFlow;
