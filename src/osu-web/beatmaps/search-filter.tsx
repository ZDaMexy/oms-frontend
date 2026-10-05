// Copyright (c) ppy Pty Ltd. AGPL-3.0-or-later.
// Fork of resources/js/beatmaps/search-filter.tsx, fixed 2c596022a1. Explicit OMS options/controller.
import { computed, makeObservable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
interface Props { title: string; options: { id: string; name: string; disabled?: boolean }[]; selected: string[]; multiselect?: boolean; onChange(value: string[]): void }
@observer
export class SearchFilter extends React.Component<Props> {
  @computed private get currentSelection() { return new Set(this.props.selected); }
  constructor(props: Props) { super(props); makeObservable(this); }
  render() { return <div className='beatmapsets-search-filter'><span className='beatmapsets-search-filter__header'>{this.props.title}</span><div className='beatmapsets-search-filter__items'>{this.props.options.map(this.renderOption)}</div></div>; }
  private readonly renderOption = (option: Props['options'][number]) => {
    const selected = this.currentSelection.has(option.id);
    return <button key={option.id} type='button' disabled={option.disabled} aria-pressed={selected} className={'beatmapsets-search-filter__item' + (selected ? ' beatmapsets-search-filter__item--active' : '')} onClick={() => {
      const next = this.props.multiselect ? new Set(this.currentSelection) : new Set<string>();
      if (this.props.multiselect && selected) next.delete(option.id); else next.add(option.id);
      this.props.onChange([...next]);
    }}>{option.name}</button>;
  };
}
