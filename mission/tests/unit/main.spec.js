import { shallowMount } from '@vue/test-utils';
import Main from '@/components/Main.vue';
import Notice from '@/components/modals/Notice.vue';


describe('Main.vue', () => {

  test('제출 버튼 두 번 클릭시 올바른 결과값.', async () => {
    const wrapper = shallowMount(Main);
    const $submitBtn = wrapper.find('button.submit');

    const GIVEN_INPUT = '1234';
    const EXPEXTED_RESULT = '3412';

    wrapper.setData({ inputText: GIVEN_INPUT });

    await $submitBtn.trigger('click');
    await $submitBtn.trigger('click');

    expect(wrapper.text()).toContain(EXPEXTED_RESULT);
  });


  test('알림버튼 클릭 시, 모달 정상 출력 여부.', async () => {
    const wrapper = shallowMount(Main);
    const NoticeModal = shallowMount(Notice);
    
    const $noticeBtn = wrapper.find('button.notice');
   
    await $noticeBtn.trigger('click');

    expect(NoticeModal.isVisible()).toBe(true);
  });
});
