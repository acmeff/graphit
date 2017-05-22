import * as APIUtil from '../util/share_api_util';

export const RECEIVE_SHARE = 'RECEIVE_SHARE';
export const REMOVE_SHARE = 'REMOVE_SHARE';
export const RECEIVE_SHARES = 'RECEIVE_SHARES';

export const receiveShare = share => ({
  type: RECEIVE_SHARE,
  share
});

export const removeShare = share => ({
  type: REMOVE_SHARE,
  share
});

export const receiveShares = shares => ({
  type: RECEIVE_SHARES,
  shares
});

export const createShare = share => dispatch => (
  APIUtil.createShare(share).then(newShare => dispatch(receiveShare(share)))
);

export const deleteShare = share => dispatch => (
  APIUtil.deleteShare(share).then(oldShare => dispatch(removeShare(oldShare)))
);

export const getShares = () => dispatch => (
  APIUtil.getShares().then(shares => receiveShares(shares))
);
