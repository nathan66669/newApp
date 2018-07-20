import FirebaseSerializer from 'emberfire/serializers/firebase';
export default FirebaseSerializer.extend({
  attrs: {
    cwar: { embedded: 'always' }
    //oname: { embedded: 'always' }
  }
});
