import { createStyles } from '@mantine/core';
import { ReactComponent as FavoriteIcon } from '../../assets/svg/star.svg';
import { MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleFavorites } from '../../store/slices/commonSlice';

type Props = {
  id: number;
};

const StarIcon = ({ id }: Props) => {
  const { favorites } = useAppSelector((state) => state.commonReducer);
  const dispatch = useAppDispatch();

  const useStyles = createStyles((theme) => ({
    button: {
      cursor: 'pointer',
      '&:hover path': {
        stroke: theme.colors.main[6],
      },
      '&.active': {
        fill: theme.colors.main[6],

        '& path': {
          stroke: theme.colors.main[6],
        },
      },
    },
  }));

  const { classes } = useStyles();

  const isActive = favorites.includes(id) ? 'active' : '';

  const onClick = (event: MouseEvent<SVGElement>) => {
    dispatch(toggleFavorites(id));
    event.currentTarget.classList.toggle('active');
  };

  return <FavoriteIcon style={{ width: '24px' }} onClick={onClick} className={`${classes.button} ${isActive}`} />;
};

export default StarIcon;