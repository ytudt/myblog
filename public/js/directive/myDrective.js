/*
 * @Author: Administrator
 * @Date:   2016-06-01 20:55:13
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-06-01 21:05:45
 */

'use strict';
angular.module('drective.tree', [])
    .directive('crudButtons', function() {
        return {
            restrict: 'AEMC',
            replace: true,
            template: '<div>' +
                '  <button type="button" class="btn btn-primary save" ng-disabled="!canSave()" ng-click="save()">Save</button>' +
                '  <button type="button" class="btn btn-warning revert" ng-click="revertChanges()" ng-disabled="!canRevert()">Revert changes</button>' +
                '  <button type="button" class="btn btn-danger remove" ng-click="remove()" ng-show="canRemove()">Remove</button>' +
                '</div>'
        };
    })
