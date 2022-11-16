import Route from '@ember/routing/route';

export default class PostRoute extends Route {
    setupController(controller,model){
        controller.set("title","");
        controller.set("brand","");
        controller.set("occasion","");
        controller.set("cost","");
        controller.set("image","");
    }
}
