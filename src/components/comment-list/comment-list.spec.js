import React from 'react'
import { shallow, render, mount } from 'enzyme'
import DecoratedCommentsList, {CommentList} from './index'
import articles from '../../fixtures'
jest.mock('react-addons-css-transition-group', () => ({children}) => {
  return <span>{children}</span>
})

const comments = articles[0].comments

describe('CommentList', () => {
  it('should render a list', () => {
    const wrapper = shallow(<CommentList comments = {comments} isOpen = {true} />)
    expect(wrapper.find('.test--comment-list__item').length).toEqual(comments.length)
  });

  it('should have comments list closed by default', () => {
    const wrapper = render(<DecoratedCommentsList comments = {comments} />)
    expect(wrapper.find('.test--comment__item').length).toEqual(0)
  });

  it('should open comments list', () => {
    const wrapper = mount(<DecoratedCommentsList comments = {comments} />)
    expect(wrapper.find('.test--comment-list__item').length).toEqual(0)

    wrapper.find('.test--comments__btn').at(0).simulate('click')
    expect(wrapper.find('.test--comment-list__item').length).toEqual(comments.length)
  });

  it('should close comments list', () => {
    const wrapper = mount(<DecoratedCommentsList comments = {comments} />)
    expect(wrapper.find('.test--comment-list__item').length).toEqual(0)

    wrapper.find('.test--comments__btn').at(0).simulate('click')
    wrapper.find('.test--comments__btn').at(0).simulate('click')
    expect(wrapper.find('.test--comment-list__item').length).toEqual(0)
  });

})
