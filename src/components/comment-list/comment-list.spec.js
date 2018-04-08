import React from 'react'
import {shallow, render, mount} from 'enzyme'
import DecoratedCommentList, {CommentList} from './index'
import articles from '../../fixtures'

describe('CommentList',() =>{
    it('shod be closed by default', () => {
      const wrapper = render(<DecoratedCommentList comments={articles[0].comments}/>)
      expect(wrapper.find('.test__comment-list--body').length).toBe(0)
    })

    it('should open/close comment', () => {
        const wrapper = mount(<DecoratedCommentList comments={articles[0].comments}/>)
        wrapper.find('.test__comment-list--btn').at(0).simulate('click');
        expect(wrapper.find('.test__comment-list--item').length).toBe(articles[0].comments.length)
    });

    it('should display an empty text', () => {
      const wrapper = mount(<DecoratedCommentList />)
      wrapper.find('.test__comment-list--btn').at(0).simulate('click');
      expect(wrapper.find('.test__comment-list--empty').length).toBe(1)

    })
})