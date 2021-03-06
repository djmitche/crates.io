import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    flashMessages: service(),

    model(params) {
        return this.store.find('category', params.category_id).catch(e => {
            if (e.errors.any(e => e.detail === 'Not Found')) {
                this.get('flashMessages').show(`Category '${params.category_id}' does not exist`);
            }
        });
    }
});
