!function(){

    window.template = (id) =>{
        return _.template($('#' + id).html());
    };
    window.App = {
        Models: {},
        Views: {},
        Collections: {},
        Route: {}
    };

    App.Models.goods = Backbone.Model.extend({
        defaults:{
            title: 'first',
            completed: 0,
            id: ''
        },
        urlRoot: '/goods',
    });
    App.Models.product = Backbone.Model.extend({
        defaults:{
            title: 'first',
            completed: 0,
            id: ''
        },
        urlRoot: '/product/1',
    });

    App.Collections.Goods = Backbone.Collection.extend({
        model: App.Models.goods,
        url: '/goods'
    });

    App.Views.goods = Backbone.View.extend({
        tagName: 'li',
        template: template('template'),
        render(){
            this.$el.append(this.template(this.model));
            return this;
        }
    });

    App.Views.Goods = Backbone.View.extend({
        tagName: 'ul',
        render(){
            _.each(this.collection, this.addOne, this);
            return this;

        },
        addOne(product1){
            let product = new App.Views.goods({model: product1});
            this.$el.append(product.render().$el);
        }
    });

    let goodsCollection = new  App.Collections.Goods;
    goodsCollection.fetch().then(function (data) {
        let goods = data;
        let temp = new App.Views.Goods({collection: goods});
        $('.content').append(temp.render().$el);
    });


}();