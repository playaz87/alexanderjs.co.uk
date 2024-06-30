import React, { useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from '@react-spring/web';

interface SpiderPoints {
  label: string;
  value: number;
  originalValue: number;
}

interface Props {
  data: SpiderPoints[];
  size?: number;
  color: string;
}

const namespace = 'http://www.w3.org/2000/svg';

const SpiderGraph: React.FC<Props> = ({ data, size = 150, color }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const numPoints = data.length;

  const maxRadius = size / 3;
  const centerX = size / 2;
  const centerY = size / 2;

  const dataPoints = useMemo(
    () =>
      data
        .map(({ value }, index) => {
          const angle = (index * 2 * Math.PI) / numPoints;
          const x = centerX + value * maxRadius * Math.cos(angle - Math.PI / 2);
          const y = centerY + value * maxRadius * Math.sin(angle - Math.PI / 2);
          return `${x},${y}`;
        })
        .join(' '),
    [data, size],
  );

  const springProps = useSpring({ points: dataPoints });

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const axesGroup = svg.querySelector<SVGGElement>('#axis');
    const labelsGroup = svg.querySelector<SVGGElement>('#labels');
    const boundaryGroup = svg.querySelector<SVGGElement>(`#boundary`);
    const valuesGroup = svg.querySelector<SVGGElement>(`#values`);

    if (!axesGroup || !labelsGroup || !boundaryGroup || !valuesGroup) return;

    // Clear existing axes, labels, and boundary
    axesGroup.innerHTML = '';
    labelsGroup.innerHTML = '';
    boundaryGroup.innerHTML = '';
    valuesGroup.innerHTML = '';

    // For positioning value labels
    const innerRadius = maxRadius * 0.85;
    const boundaryPoints: string[] = [];

    data.forEach(({ value, label: labelTxt, originalValue }, index) => {
      const angle = (index * 2 * Math.PI) / numPoints;

      // Create axis line
      const axisX = centerX + maxRadius * Math.cos(angle - Math.PI / 2);
      const axisY = centerY + maxRadius * Math.sin(angle - Math.PI / 2);
      const axisLine = document.createElementNS(namespace, 'line');
      axisLine.setAttribute('x1', centerX.toString(10));
      axisLine.setAttribute('y1', centerY.toString(10));
      axisLine.setAttribute('x2', axisX.toString(10));
      axisLine.setAttribute('y2', axisY.toString(10));
      axesGroup.appendChild(axisLine);

      // Create label
      const labelX = centerX + (maxRadius + 10) * Math.cos(angle - Math.PI / 2);
      const labelY = centerY + (maxRadius + 10) * Math.sin(angle - Math.PI / 2);
      const label = document.createElementNS(namespace, 'text');
      label.setAttribute('x', labelX.toString());
      label.setAttribute('y', labelY.toString());
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('dominant-baseline', 'middle');
      label.setAttribute('filter', 'url(#shadow)'); // Apply shadow filter
      label.textContent = labelTxt;

      // Rotate label perpendicular to axis
      let rotateAngle = (angle * 180) / Math.PI;

      // Flip labels at bottom to be right side up
      if (rotateAngle > 90 && rotateAngle < 270) {
        rotateAngle += 180;
      }

      label.setAttribute('transform', `rotate(${rotateAngle}, ${labelX}, ${labelY})`);
      labelsGroup.appendChild(label);

      boundaryPoints.push(`${axisX},${axisY}`);

      // Add value labels
      const valueX = centerX + value * innerRadius * Math.cos(angle - Math.PI / 2);
      const valueY = centerY + value * innerRadius * Math.sin(angle - Math.PI / 2);
      const valueText = document.createElementNS(namespace, 'text');
      valueText.setAttribute('x', valueX.toString());
      valueText.setAttribute('y', valueY.toString());
      valueText.setAttribute('text-anchor', 'middle');
      valueText.setAttribute('dominant-baseline', 'middle');
      valueText.textContent = originalValue.toString();
      valuesGroup.appendChild(valueText);
    });

    // Create the boundary polygon connecting the extremities
    const boundaryPolygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    boundaryPolygon.setAttribute('points', boundaryPoints.join(' '));
    boundaryPolygon.setAttribute('fill', 'none');
    boundaryPolygon.setAttribute('stroke', 'black');
    boundaryPolygon.setAttribute('stroke-width', '1');
    boundaryGroup.appendChild(boundaryPolygon);

    // Update the polygon with calculated points for the data
    const dataPolygon = svg.querySelector<SVGPolygonElement>(`#data-line`);
    if (dataPolygon) {
      dataPolygon.setAttribute('points', dataPoints);
    }
  }, [data, dataPoints]);

  return (
    <Svg ref={svgRef} $size={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <filter id='shadow' x='-50%' y='-50%' width='200%' height='200%'>
          <feGaussianBlur in='SourceAlpha' stdDeviation='1' />
          <feOffset dx='1' dy='1' result='offsetblur' />
          <feFlood floodColor='rgba(0,0,0,0.3)' />
          <feComposite in2='offsetblur' operator='in' />
          <feMerge>
            <feMergeNode />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
      <Axis id={'axis'} />
      <Labels $size={size} $color={color} id={'labels'} />
      <Boundary $color={color} id={'boundary'} />
      <DataLine $color={color} points={springProps.points} id={'data-line'} />
      <Values id={'values'} />
    </Svg>
  );
};

export default React.memo(SpiderGraph);

const Svg = styled.svg<{ $size: number }>`
  font-size: 100%;
`;

const Axis = styled.g`
  stroke: #ccc;
  stroke-width: 1;
`;

const Labels = styled.g<{ $size: number; $color: string }>`
  font-size: ${props => props.$size / 25}px;
  text-transform: capitalize;
  fill: var(--color-${props => props.$color});
  filter: contrast(80%) brightness(80%);
`;

const Boundary = styled.g<{ $color: string }>`
  stroke: var(--color-${props => props.$color});
  stroke-width: 1;
  //fill: none;
  fill: var(--color-${props => props.$color});
`;

const DataLine = styled(animated.polygon)<{ $color: string }>`
  //fill: hsl(from var(--color-${props => props.$color}) h s l / 0.5); // poor browser support :(
  fill: var(--color-${props => props.$color});
  stroke: var(--accent);

  opacity: 0.8;
  stroke-width: 1;
`;

const Values = styled.g`
  font-size: 12px;
  fill: black;
`;
