$(document).ready(function() {
	var myInterval;
	var bulbasaurSrc = 'Bulbasaur.png';
	var charmanderSrc = 'Charmander.png';
	var squirtleSrc = 'Squirtle.png';
	var caterpieSrc = 'Caterpie.png';
	var weedleSrc = 'Weedle.png';
	var pidgeySrc = 'Pidgey.png';
	var rattataSrc = 'Rattata.png';
	var spearowSrc = 'Spearow.png';
	var ekansSrc = 'Ekans.png';
	var pikachuSrc = 'Pikachu.png';
	var sandshrewSrc = 'Sandshrew.png';
	var nidoranfSrc = 'Nidoran-f.png';
	var nidoranmSrc = 'Nidoran-m.png';
	var clefairySrc = 'Clefairy.png';
	var vulpixSrc = 'Vulpix.png';
	var jigglypuffSrc = 'Jigglypuff.png';
	var zubatSrc = 'Zubat.png';
	var oddishSrc = 'Oddish.png';
	var parasSrc = 'Paras.png';
	var venonatSrc = 'Venonat.png';
	var diglettSrc = 'Diglett.png';
	var meowthSrc = 'Meowth.png';
	var psyduckSrc = 'Psyduck.png';
	var mankeySrc = 'Mankey.png';
	var growlitheSrc = 'Growlithe.png';
	var poliwagSrc = 'Poliwag.png';
	var abraSrc = 'Abra.png';
	var machopSrc = 'Machop.png';
	var tentacoolSrc = 'Tentacool.png';
	var geodudeSrc = 'Geodude.png';
	var bellsproutSrc = 'Bellsprout.png';
	var ponytaSrc = 'Ponyta.png';
	var slowpokeSrc = 'Slowpoke.png';
	var magnemiteSrc = 'Magnemite.png';
	var doduoSrc = 'Doduo.png';
	var seelSrc = 'Seel.png';
	var grimerSrc = 'Grimer.png';
	var shellderSrc = 'Shellder.png';
	var gastlySrc = 'Gastly.png';
	var drowzeeSrc = 'Drowzee.png';
	var krabbySrc = 'Krabby.png';
	var voltorbSrc = 'Voltorb.png';
	var exeggcuteSrc = 'Exeggcute.png';
	var cuboneSrc = 'Cubone.png';
	var koffingSrc = 'Koffing.png';
	var rhyhornSrc = 'Rhyhorn.png';
	var horseaSrc = 'Horsea.png';
	var goldeenSrc = 'Goldeen.png';
	var staryuSrc = 'Staryu.png';
	var magikarpSrc = 'Magikarp.png';
	var eeveeSrc = 'Eevee.png';
	var omanyteSrc = 'Omanyte.png';
	var kabutoSrc = 'Kabuto.png';
	var dratiniSrc = 'Dratini.png';
	var changeBulbasaur = ['Bulbasaur.png', 'Ivysaur.png', 'Venusaur.png'];
	var changeCharmander = ['Charmander.png', 'Charmeleon.png', 'Charizard.png'];
	var changeSquirtle = ['Squirtle.png', 'Wartortle.png', 'Blastoise.png'];
	var changeCaterpie = ['Caterpie.png', 'Metapod.png', 'Butterfree.png'];
	var changeWeedle = ['Weedle.png', 'Kakuna.png', 'Beedrill.png'];
	var changePidgey = ['Pidgey.png', 'Pidgeotto.png', 'Pidgeot.png'];
	var changeRattata = ['Rattata.png', 'Raticate.png'];
	var changeSpearow = ['Spearow.png', 'Fearow.png'];
	var changeEkans = ['Ekans.png', 'Arbok.png'];
	var changePikachu = ['Pikachu.png', 'Raichu.png'];
	var changeSandshrew = ['Sandshrew.png', 'Sandslash.png'];
	var changeNidoranf = ['Nidoran-f.png', 'Nidorina.png', 'Nidoqueen.png'];
	var changeNidoranm = ['Nidoran-m.png', 'Nidorino.png', 'Nidoking.png'];
	var changeClefairy = ['Clefairy.png', 'Clefable.png'];
	var changeVulpix = ['Vulpix.png', 'Ninetales.png'];
	var changeJigglypuff = ['Jigglypuff.png', 'Wigglytuff.png'];
	var changeZubat = ['Zubat.png', 'Golbat.png'];
	var changeOddish = ['Oddish.png', 'Gloom.png', 'Vileplume.png'];
	var changeParas = ['Paras.png', 'Parasect.png'];
	var changeVenonat = ['Venonat.png', 'Venomoth.png'];
	var changeDiglett = ['Diglett.png', 'Dugtrio.png'];
	var changeMeowth = ['Meowth.png', 'Persian.png'];
	var changePsyduck = ['Psyduck.png', 'Golduck.png'];
	var changeMankey = ['Mankey.png', 'Primeape.png'];
	var changeGrowlithe = ['Growlithe.png', 'Arcanine.png'];
	var changePoliwag = ['Poliwag.png', 'Poliwhirl.png', 'Poliwrath.png'];
	var changeAbra = ['Abra.png', 'Kadabra.png', 'Alakazam.png'];
	var changeMachop = ['Machop.png', 'Machoke.png', 'Machamp.png'];
	var changeBellsprout = ['Bellsprout.png', 'Weepinbell.png', 'Victreebel.png'];
	var changeTentacool = ['Tentacool.png', 'Tentacruel.png'];
	var changeGeodude = ['Geodude.png', 'Graveler.png', 'Golem.png'];
	var changePonyta = ['Ponyta.png', 'Rapidash.png'];
	var changeSlowpoke = ['Slowpoke.png', 'Slowbro.png'];
	var changeMagnemite = ['Magnemite.png', 'Magneton.png'];
	var changeDoduo = ['Doduo.png', 'Dodrio.png'];
	var changeSeel = ['Seel.png', 'Dewgong.png'];
	var changeGrimer = ['Grimer.png', 'Muk.png'];
	var changeShellder = ['Shellder.png', 'Cloyster.png'];
	var changeGastly = ['Gastly.png', 'Haunter.png', 'Gengar.png'];
	var changeDrowzee = ['Drowzee.png', 'Hypno.png'];
	var changeKrabby = ['Krabby.png', 'Kingler.png'];
	var changeVoltorb = ['Voltorb.png', 'Electrode.png'];
	var changeExeggcute = ['Exeggcute.png', 'Exeggutor.png'];
	var changeCubone = ['Cubone.png', 'Marowak.png'];
	var changeKoffing = ['Koffing.png', 'Weezing.png'];
	var changeRhyhorn = ['Rhyhorn.png', 'Rhydon.png'];
	var changeHorsea = ['Horsea.png', 'Seadra.png'];
	var changeGoldeen = ['Goldeen.png', 'Seaking.png'];
	var changeStaryu = ['Staryu.png', 'Starmie.png'];
	var changeMagikarp = ['Magikarp.png', 'Gyarados.png'];
	var changeEevee = ['Eevee.png', 'Vaporeon.png', 'Jolteon.png', 'Flareon.png'];
	var changeOmanyte = ['Omanyte.png', 'Omastar.png'];
	var changeKabuto = ['Kabuto.png', 'Kabutops.png'];
	var changeDratini = ['Dratini.png', 'Dragonair.png', 'Dragonite.png'];
	
	$('.photo#bulbasaur').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeBulbasaur.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeBulbasaur[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', bulbasaurSrc);
	});
	
	$('.photo#charmander').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeCharmander.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeCharmander[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', charmanderSrc);
	});
	
	$('.photo#squirtle').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeSquirtle.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeSquirtle[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', squirtleSrc);
	});
	
	$('.photo#caterpie').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeCaterpie.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeCaterpie[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', caterpieSrc);
	});
	
	$('.photo#weedle').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeWeedle.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeWeedle[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', weedleSrc);
	});
	
	$('.photo#pidgey').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changePidgey.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changePidgey[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', pidgeySrc);
	});
	
	$('.photo#rattata').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeRattata.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeRattata[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', rattataSrc);
	});
	
	$('.photo#spearow').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeSpearow.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeSpearow[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', spearowSrc);
	});
	
	$('.photo#ekans').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeEkans.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeEkans[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', ekansSrc);
	});
	
	$('.photo#pikachu').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changePikachu.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changePikachu[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', pikachuSrc);
	});
	
	$('.photo#sandshrew').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeSandshrew.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeSandshrew[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', sandshrewSrc);
	});
	
	$('.photo#nidoran-f').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeNidoranf.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeNidoranf[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', nidoranfSrc);
	});
	
	$('.photo#nidoran-m').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeNidoranm.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeNidoranm[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', nidoranmSrc);
	});
	
	$('.photo#clefairy').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeClefairy.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeClefairy[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', clefairySrc);
	});
	
	$('.photo#vulpix').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeVulpix.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeVulpix[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', vulpixSrc);
	});
	
	$('.photo#jigglypuff').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeJigglypuff.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeJigglypuff[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', jigglypuffSrc);
	});
	
	$('.photo#zubat').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeZubat.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeZubat[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', zubatSrc);
	});
	
	$('.photo#oddish').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeOddish.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeOddish[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', oddishSrc);
	});
	
	$('.photo#paras').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeParas.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeParas[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', parasSrc);
	});
	
	$('.photo#venonat').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeVenonat.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeVenonat[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', venonatSrc);
	});
	
	$('.photo#diglett').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeDiglett.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeDiglett[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', diglettSrc);
	});
	
	$('.photo#meowth').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeMeowth.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeMeowth[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', meowthSrc);
	});
	
	$('.photo#psyduck').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changePsyduck.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changePsyduck[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', psyduckSrc);
	});
	
	$('.photo#mankey').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeMankey.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeMankey[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', mankeySrc);
	});
	
	$('.photo#growlithe').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeGrowlithe.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeGrowlithe[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', growlitheSrc);
	});
	
	$('.photo#poliwag').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changePoliwag.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changePoliwag[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', poliwagSrc);
	});
	
	$('.photo#abra').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeAbra.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeAbra[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', abraSrc);
	});
	
	$('.photo#machop').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeMachop.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeMachop[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', machopSrc);
	});
	
	$('.photo#bellsprout').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeBellsprout.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeBellsprout[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', bellsproutSrc);
	});
	
	$('.photo#tentacool').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeTentacool.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeTentacool[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', tentacoolSrc);
	});
	
	$('.photo#geodude').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeGeodude.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeGeodude[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', geodudeSrc);
	});
	
	$('.photo#ponyta').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changePonyta.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changePonyta[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', ponytaSrc);
	});
	
	$('.photo#slowpoke').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeSlowpoke.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeSlowpoke[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', slowpokeSrc);
	});
	
	$('.photo#magnemite').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeMagnemite.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeMagnemite[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', magnemiteSrc);
	});
	
	$('.photo#doduo').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeDoduo.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeDoduo[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', doduoSrc);
	});
	
	$('.photo#seel').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeSeel.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeSeel[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', seelSrc);
	});
	
	$('.photo#grimer').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeGrimer.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeGrimer[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', grimerSrc);
	});
	
	$('.photo#shellder').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeShellder.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeShellder[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', shellderSrc);
	});
	
	$('.photo#gastly').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeGastly.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeGastly[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', gastlySrc);
	});
	
	$('.photo#drowzee').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeDrowzee.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeDrowzee[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', drowzeeSrc);
	});
	
	$('.photo#krabby').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeKrabby.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeKrabby[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', krabbySrc);
	});
	
	$('.photo#voltorb').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeVoltorb.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeVoltorb[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', voltorbSrc);
	});
	
	$('.photo#exeggcute').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeExeggcute.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeExeggcute[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', exeggcuteSrc);
	});
	
	$('.photo#cubone').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeCubone.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeCubone[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', cuboneSrc);
	});
	
	$('.photo#koffing').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeKoffing.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeKoffing[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', koffingSrc);
	});
	
	$('.photo#rhyhorn').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeRhyhorn.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeRhyhorn[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', rhyhornSrc);
	});
	
	$('.photo#horsea').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeHorsea.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeHorsea[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', horseaSrc);
	});
	
	$('.photo#goldeen').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeGoldeen.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeGoldeen[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', goldeenSrc);
	});
	
	$('.photo#staryu').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeStaryu.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeStaryu[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', staryuSrc);
	});
	
	$('.photo#magikarp').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeMagikarp.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeMagikarp[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', magikarpSrc);
	});
	
	$('.photo#eevee').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeEevee.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeEevee[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', eeveeSrc);
	});
	
	$('.photo#omanyte').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeOmanyte.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeOmanyte[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', omanyteSrc);
	});
	
	$('.photo#kabuto').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeKabuto.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeKabuto[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', kabutoSrc);
	});
	
	$('.photo#dratini').hover(
	function() {
		var imgElem = $(this);
		var curImageIndex = 0;
		myInterval = setInterval(function() {
			curImageIndex += 1;
			if (curImageIndex >= changeDratini.length) {
				curImageIndex = 0;
			}
			imgElem.attr('src', changeDratini[curImageIndex]);
		}, 1000);
	},
	function() {
		clearInterval(myInterval);
		$(this).attr('src', dratiniSrc);
	});
});