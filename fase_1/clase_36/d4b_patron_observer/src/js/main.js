import { SuscriptorYoutubeObserver } from "./suscriptor-youtube.observer.js";
import { SuscriptorTwitchObserver } from "./suscriptor-twitch.observer.js";
import { CanalPublisher } from "./canal.publisher.js";

// Crear suscriptores
const subscriber1 = new SuscriptorYoutubeObserver("Lorena", "Pérez");
const subscriber2 = new SuscriptorYoutubeObserver("Pedro", "Medina");
const subscriber3 = new SuscriptorYoutubeObserver("Mariana", "Ortega");
const subscriber4 = new SuscriptorTwitchObserver(125480, "Pablo A. Rivera", true);
const subscriber5 = new SuscriptorTwitchObserver(250444, "Leonel M. Medina", true);

// Crear canal
const myChannel = new CanalPublisher("Mi Canal de POO");

// Suscribir observadores
myChannel.subscribe(subscriber1);
myChannel.subscribe(subscriber2);
myChannel.subscribe(subscriber3);
myChannel.subscribe(subscriber4);
myChannel.subscribe(subscriber5);

// Enviar notificaciones

console.log("\nPrimera Notificación:");
myChannel.notifyNewVideo("Aprendiendo el patrón State");

console.log("\nSegunda Notificación:");
myChannel.unsubscribe(subscriber1);
myChannel.notifyNewVideo("Aprendiendo el patrón Observer");

console.log("\nTercera Notificación:");
myChannel.unsubscribe(subscriber4);
myChannel.notifyNewVideo("Aprendiendo el patrón Strategy");

console.log(myChannel);