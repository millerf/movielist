
export const EVENTNAMES = {
  mediaClicked: 'mediaClicked',
  mediaUpdated: function (id: number) {
    return 'mediaUpdated' + id;
  },
};
