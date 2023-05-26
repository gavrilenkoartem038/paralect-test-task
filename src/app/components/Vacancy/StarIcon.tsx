import { createStyles } from '@mantine/core';
import { ReactComponent as FavoriteIcon } from '../../assets/svg/star.svg';
import { MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleFavorites } from '../../store/slices/favouritesSlice';

type Props = {
  id: number;
};

const StarIcon = ({ id }: Props) => {
  const { favorites } = useAppSelector((state) => state.favoriteReducer);
  const dispatch = useAppDispatch();

  const useStyles = createStyles((theme) => ({
    button: {
      cursor: 'pointer',
      '&:hover path': {
        stroke: theme.colors.main[5],
      },
      '&.active': {
        fill: theme.colors.main[5],

        '& path': {
          stroke: theme.colors.main[5],
        },
      },
    },
  }));

  const { classes } = useStyles();

  const isActive = favorites.includes(id) ? 'active' : '';

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    dispatch(toggleFavorites(id));
    event.currentTarget.classList.toggle('active');
  };

  return (
    <button className="unstyled-button" onClick={onClick} data-elem={`vacancy-${id}-shortlist-button`}>
      <FavoriteIcon style={{ minWidth: '24px', width: '24px' }} className={`${classes.button} ${isActive}`} />
    </button>
  );
};

export default StarIcon;
