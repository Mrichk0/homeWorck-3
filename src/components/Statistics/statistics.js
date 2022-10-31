import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'components/Box/Box';

import getRandomHexColor from '../../utils/clolorRandom';

const Label = styled.span`
  display: flex;
`;

const Item = styled.li`
  padding: 15px 20px;
`;

export default function Statistics({ title, stats = [] }) {
  const item = stats.map(({ id, label, percentage }) => {
    return (
      <Item
        class="item"
        key={id}
        style={{ backgroundColor: getRandomHexColor() }}
      >
        <Label>{label}</Label>
        <span class="percentage">{percentage}%</span>
      </Item>
    );
  });
  return (
    <Box textAlign="center" pt={12}>
      {title && <h1 className="title">{title}</h1>}
      <Box display="flex" justifyContent="center" p="0">
        {item}
      </Box>
    </Box>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
