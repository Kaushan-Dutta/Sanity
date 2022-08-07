//conecting react to sanity
import sanityClient from '@sanity/client';

export default sanityClient({
    projectId:'jt4u2ohb',
    dataset:"production"
})