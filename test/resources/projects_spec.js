/* global describe */
/* global it */
var assert = require('assert');
var sinon = require('sinon');
var Projects = require('../../lib/resources/projects');

describe('Projects', function() {
  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var projects = new Projects(dispatcher);
      assert.equal(projects.dispatcher, dispatcher);
    });
  });

  describe('#create', function() {
    it('should handle the creation', function() {
      var dispatcher = {
        post: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var data = {
        name: 'Test'
      };
      projects.create(data);
      assert(dispatcher.post.calledWithExactly('/projects', data));
    });
  });

  describe('#createInWorkspace', function() {
    it('should handle the creation', function() {
      var dispatcher = {
        post: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var id = 1;
      var data = {
        name: 'Test'
      };
      projects.createInWorkspace(id, data);
      assert(dispatcher.post.calledWithExactly('/workspaces/1/projects', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        post: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var id = '1';
      var data = {
        name: 'Test'
      };
      projects.createInWorkspace(id, data);
      assert(dispatcher.post.calledWithExactly('/workspaces/1/projects', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        post: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      projects.createInWorkspace(id, data);
      assert(
        dispatcher.post.calledWithExactly('/workspaces/NaN/projects', data));
    });
  });

  describe('#findAll', function() {
    it('should handle without params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      projects.findAll();
      assert(dispatcher.get.calledWithExactly('/projects', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      projects.findAll(params);
      assert(dispatcher.get.calledWithExactly('/projects', params));
    });
  });

  describe('#findById', function() {
    it('should handle without params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var id = 1;
      projects.findById(id);
      assert(dispatcher.get.calledWithExactly('/projects/1', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      projects.findById(id, params);
      assert(dispatcher.get.calledWithExactly('/projects/1', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      projects.findById(id, params);
      assert(dispatcher.get.calledWithExactly('/projects/1', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      projects.findById(id, params);
      assert(dispatcher.get.calledWithExactly('/projects/NaN', params));
    });
  });

  describe('#findByWorkspace', function() {
    it('should handle without params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var id = 1;
      projects.findByWorkspace(id);
      assert(
        dispatcher.get.calledWithExactly('/workspaces/1/projects', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      projects.findByWorkspace(id, params);
      assert(
        dispatcher.get.calledWithExactly('/workspaces/1/projects', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      projects.findByWorkspace(id, params);
      assert(
        dispatcher.get.calledWithExactly('/workspaces/1/projects', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      projects.findByWorkspace(id, params);
      assert(
        dispatcher.get.calledWithExactly('/workspaces/NaN/projects', params));
    });
  });

  describe('#update', function() {
    it('should handle the update', function() {
      var dispatcher = {
        put: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var id = 1;
      var data = {
        name: 'Test'
      };
      projects.update(id, data);
      assert(dispatcher.put.calledWithExactly('/projects/1', data));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        put: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var id = '1';
      var data = {
        name: 'Test'
      };
      projects.update(id, data);
      assert(dispatcher.put.calledWithExactly('/projects/1', data));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        put: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var id = 'foobar';
      var data = {
        name: 'Test'
      };
      projects.update(id, data);
      assert(dispatcher.put.calledWithExactly('/projects/NaN', data));
    });
  });

  describe('#delete', function() {
    it('should handle the deletion', function() {
      var dispatcher = {
        delete: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var id = 1;
      projects.delete(id);
      assert(dispatcher.delete.calledWithExactly('/projects/1'));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        delete: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var id = '1';
      projects.delete(id);
      assert(dispatcher.delete.calledWithExactly('/projects/1'));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        delete: sinon.stub()
      };
      var projects = new Projects(dispatcher);
      var id = 'foobar';
      projects.delete(id);
      assert(dispatcher.delete.calledWithExactly('/projects/NaN'));
    });
  });
});