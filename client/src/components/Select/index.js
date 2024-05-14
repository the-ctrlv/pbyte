/* eslint-disable consistent-return */
import { useContext, useEffect, useState } from 'react';

import { getClassNames } from 'shared';
import { AnimateStartContext } from 'shared/context';

import { StyledSelect } from './styles';

export default function Select({ setFilterTag, setIndex, tagList }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAnimationFinished } = useContext(AnimateStartContext);
  const selectTagList = [
    { value: 'All', label: 'All' },
    ...tagList.map((item) => ({ value: item, label: item })),
  ];
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else if (isAnimationFinished) {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, isAnimationFinished]);
  return (
    <StyledSelect
      className={getClassNames('select', isMenuOpen ? 'active' : '')}
      placeholder="Type of articles"
      options={selectTagList}
      data-scroll
      onMenuOpen={() => {
        setIsMenuOpen(true);
      }}
      onMenuClose={() => {
        setIsMenuOpen(false);
      }}
      instanceId="select"
      isSearchable={false}
      onChange={(e) => {
        setFilterTag(e.value);
        setIndex(4);
      }}
    />
  );
}
