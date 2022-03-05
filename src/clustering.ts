import { ClusteringApp } from './clustering-app';
import { ServiceTest } from './service-test';

(() => new ClusteringApp(new ServiceTest()))();
