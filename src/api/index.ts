import Interfaces from './interfaces';
import { Http } from 'nat-plus';

/**
 * @description 测试
 * @param id id
 */
export const getList = ({id}:{id:number}): Promise<any> => {
  return Http.ajax({
    method: 'get',
    url: Interfaces.getListApi,
    data: {
      id,
    },
  });
};
